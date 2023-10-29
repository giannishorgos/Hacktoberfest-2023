# Hacktoberfest Participants Registration

Welcome to the Hacktoberfest 2023 - Dev Assignment repository! This project is part of the Hacktoberfest challenge, and it's focused on the development of a website that allows participants to register and view their details. This README provides an overview of the project and how to set it up.

## Table of Contents

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Directory Structure](#directory-structure)
- [Setup Instructions](#setup-instructions)
- [Database](#database)
  - [Database Structure](#structure)
  - [Database Setup](#setup)
    

## Project Description

The Hacktoberfest Participants Registration project is a web application that provides the following features:

- User registration: Participants can register by providing their information, including name, GitLab ID, Kaggle ID, bio, and birth date.
- Skills tracking: Participants can select their skills (FrontEnd, BackEnd, etc.) during registration.
- Participants list: The website displays a list of registered participants along with their details and skills.
- Figma Design: The project replicates the design provided in Figma.

## Technologies Used

The project utilizes the following technologies:

- Angular: The frontend of the application is built using the Angular framework.
- MySQL Docker Image: The MySQL database is containerized using a Docker image.
- Express Server: An Express.js server provides APIs to interact with the database.
- HTML and CSS: The HTML and CSS files are used to replicate the Figma design for the desktop view.

## Directory Structure

The project directory is structured as follows:

- `hacktoberfest/` contains the Angular project.
- `hacktoberfest/server.js` is the Express server.
- `hacktoberfest/.env` files should be updated with the necessary database configuration.
- `hacktoberfest_db.sql` is a database dump containing skill data.
- `index.html` and `style.css` replicate the Figma design for the desktop view.

## Setup Instructions

Follow these steps to set up the project:

1. Clone the repository to your local machine.
2. Navigate to the `hacktoberfest/` directory and run `npm install` to install the Angular project dependencies.
3. Update the `.env` files with your database configuration.
4. Create and set up a MySQL database using the `hacktoberfest_db.sql` dump.
5. Run the Express server with `node server.js`.

## Database
### Structure
The database structure is represented in the following image:



### Setup
Ensure that you have MySQL Server installed and configured. You can use the provided database dump (`hacktoberfest_db.sql`) to create the necessary tables.

```bash
mysql -u your_username -p your_database < hacktoberfest_db.sql
