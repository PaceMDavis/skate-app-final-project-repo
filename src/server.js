// // import { response } from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 8080;

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

app.get('/', (req, res) => res.send('ho!'));

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`)
})
// const DATABASE_URL = 'postgres://iijqbpyyfkumxl:535496815d8b1666b3bce030d8093350332419640bf63aa3cee0e4bc0ce4cbee@ec2-52-20-248-222.compute-1.amazonaws.com:5432/d4f3fhuebc2khp'
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? true : false
});

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})