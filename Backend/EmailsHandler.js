const express = require('express');
const Routes = express.Router();
const { Client } = require('pg');
const configurations = require('./Databaseconfig');

// Create a client instance
const client = new Client(configurations);

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });

async function insertEmailToDatabase(req, res) {
  try {
    const { name, email, contact, subject, message } = req.body;
    // Insert data
    const insertQuery = `
      INSERT INTO Emails_tbl (User_Name, User_Email, User_phone, Subject, Message)
      VALUES ($1, $2, $3, $4, $5)
    `;
    const insertValues = [name, email, contact, subject, message];
    await client.query(insertQuery, insertValues);

    // Send success response
    res.status(201).json({ message: "Email Added successfully" });
  } catch (err) {
    console.error('Error inserting email:', err);
    res.status(500).json({ message: "Error inserting email" });
  }
}

Routes.post('/', async (req, res) => {
    //console.log(req.body);
  await insertEmailToDatabase(req, res);

  // Get all Emails_tbl data
  const all = "SELECT * FROM Emails_tbl";
  const result = await client.query(all);
  console.log(result.rows); // Log retrieved data
  // You may want to send this data as a response if needed
  // res.status(200).json(result.rows);
});

Routes.get('/', async (req, res) => {
  //res.end("Email service is running");
  console.log('running')
});

module.exports = Routes;





