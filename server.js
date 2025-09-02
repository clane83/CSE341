/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const env = require("dotenv").config();
const cors = require("cors");
const app = express();
const path = require('path');
const fs = require('fs');

/* ***********************
 * Routes
 *************************/
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});
//Index route
app.get('/professional', (req, res) => {
    const filePath = path.join(__dirname, './database', 'professional.json');
    const data = fs.readFileSync(filePath, 'utf8');
    res.json(JSON.parse(data));
});


/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`)
})
