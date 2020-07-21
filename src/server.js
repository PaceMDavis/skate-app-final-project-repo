// // import { response } from 'express';
require('dotenv').config();
const fs = require('fs')
const https = require('https')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 49050

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended:true,
  })
)
// app.use(express.static(path.join(_dirname, 'build')))

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

app.get('/', (req, res) => res.send('hi!'));

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`)
})


const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: process.env.DATABASE_URL ? true : false

});

// app.get('/db', async (req, res) => {
//   console.log(process.env.DATABASE_URL, "check")
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM test_table');
//     const results = { 'results': (result) ? result.rows : null};
//     res.render('pages/db', results );
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// })

// https.createServer({
//   key: fs.readFileSync('./key.pem'),
//   cert: fs.readFileSync('./cert.pem'),
//   passphrase: process.env.PASSPHRASE
// }, app)
// .listen(port);