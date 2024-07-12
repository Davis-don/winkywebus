const express = require('express');
const Router = express.Router();
const configurations = require('./Databaseconfig');
const { Client } = require('pg');


//create messages table
async function createTableEmails() {
    const client = new Client(configurations);
    try {
        await client.connect();
        const query = `
        CREATE TABLE IF NOT EXISTS Emails_tbl (
            id SERIAL PRIMARY KEY,
            User_Name VARCHAR(200),
            User_Email VARCHAR(100),
            User_phone VARCHAR(20),
            Subject VARCHAR(200),
            Message VARCHAR(255),
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    
        await client.query(query);
        console.log('Table Email created successfully');
    } catch (err) {
        console.error('Error creating table', err);
        throw err;
    } finally {
        await client.end();
    }
}

// Function to drop the client_info_tbl table
async function dropTableEmails() {
    const client = new Client(configurations);
    try {
        await client.connect();
        const query = 'DROP TABLE IF EXISTS Emails_tbl';
        await client.query(query);
        console.log('Table Emails dropped successfully');
    } catch (err) {
        console.error('Error dropping table', err);
        throw err;
    } finally {
        await client.end();
    }
}



// async function insertAdminData(adminId, firstName, lastName, phone, password) {
//     const client = new Client(configurations);
//     try {
//         await client.connect();
//         const query = `
//             INSERT INTO Admins_tbl (Admin_id, Admin_first_name, Admin_last_name, Admin_phone, Admin_password)
//             VALUES ($1, $2, $3, $4, $5)
//         `;
//         const values = [adminId, firstName, lastName, phone, password];
//         await client.query(query, values);
//         console.log('Data inserted into Admins_tbl successfully');
//     } catch (err) {
//         console.error('Error inserting data into Admins_tbl', err);
//         throw err;
//     } finally {
//         await client.end();
//     }
// }


Router.get('/', async (req, res) => {
    try {
        await createTableEmails();
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint to drop all tables the table
Router.get('/drop', async (req, res) => {
    try {
        await dropTableEmails();
        res.send('Server initialised');
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = Router;





