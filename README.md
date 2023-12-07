# Accredian-frontend-task
This project is a React application that provides visually appealing and responsive login and signup forms. The goal is to create an intuitive user interface with mandatory fields and form validation.
Navigate to the project directory:

1. Navigate to Project Directory
cd frontend

2. Install dependencies:
npm install

Features

Login Form
Username or Email (mandatory): Users must enter either their username or email.
Password (mandatory): Users must enter their password.

Sign-Up Form
Username (mandatory): Users must enter a username.
Email (mandatory): Users must enter a valid email address.
Password (mandatory): Users must create a password.
Confirm Password (mandatory): Users must confirm their password.

Design Considerations
Material-UI Components: Utilize Material-UI components for a modern and visually appealing design.
Form Validation: Implement form validation for mandatory fields to enhance user experience.

Usage
To run the application locally, use the following command:

npm start
The application will be accessible at http://localhost:3000 in your browser.

Project Structure

frontend/
│
├── src/
│   ├── /pages
│   │   ├── register
│   │          |--register.css
|   |          |--Register.jsx
|   |    |--login
|   |         |--login.css
|   |         |--Login.jsx
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── public/
│   ├── index.html
│   └── ...
│
├── package.json
├── README.md
└── ...

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
