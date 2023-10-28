const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createConnection({
    host: 'localhost',
    port: '3333',
    user: 'root',
    password: '1234',
    database: 'hacktoberfest2023',
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack)
        return
    }
    console.log('Connected to MySQL database')
})

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,POST',
    credentials: true,
}

const app = express()
const port = 4000

app.use(bodyParser.json()).use(cors(corsOptions))

// Create an API endpoint to fetch data from MySQL
app.get('/api/participants', (req, res) => {
    const query = `SELECT p.*,
                GROUP_CONCAT(s.name ORDER BY s.name ASC SEPARATOR ', ') AS skills
                FROM participants AS p
                LEFT JOIN participants_has_skills AS ps ON p.id = ps.participant_id
                LEFT JOIN skills AS s ON ps.skill_id = s.id
                GROUP BY p.id;`
    db.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error fetching data' + error })
        } else {
            res.json(results)
        }
    })
})

app.post('/api/participants', (req, res) => {
    const query_participants = `INSERT INTO participants 
      (name, last_name, gitlab_id, kaggle_id, bio, birth_date) 
      VALUES (?, ?, ?, ?, ?, ?);`
    const query_participants_has_skills = `INSERT INTO participants_has_skills (participant_id, skill_id) VALUES (?, ?);`
    const skills = req.body.skills

    db.query(
        query_participants,
        [
            req.body.name,
            req.body.last_name,
            req.body.gitlab_id,
            req.body.kaggle_id,
            req.body.bio,
            req.body.birth_date,
        ],
        (error, results) => {
            if (error) {
                res.status(500).json({ error: 'Error posting data' + error })
            } else {
                const participant_id = results.insertId
                const participant_skill_promises = skills.map((skill) => {
                    return new Promise((resolve, reject) => {
                        db.query(
                            query_participants_has_skills,
                            [participant_id, skill],
                            (error, results) => {
                                if (error) {
                                    reject(error)
                                } else {
                                    resolve(results)
                                }
                            }
                        )
                    })
                })

                Promise.all(participant_skill_promises)
                    .then(() => {
                        res.json({ message: 'Data posted successfully' })
                    })
                    .catch((error) => {
                        res.status(500).json({
                            error: 'Error posting data' + error,
                        })
                    })
            }
        }
    )
})

app.get('/api/skills', (req, res) => {
    const query = `SELECT * FROM skills;`
    db.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error fetching data' + error })
        } else {
            res.json(results)
        }
    })
})

app.post('/api/skills', (req, res) => {
    const query = `INSERT INTO skills (name) VALUES (?);`
    db.query(query, [req.body.skill_name], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error fetching data' + error })
        } else {
            res.json(results)
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
