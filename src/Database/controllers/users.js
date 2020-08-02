const mysql = require('mysql')
const pool = require('../sql/connection')
const {handleSQLError} = require('../sql/error')

const getAllUsers = (req,res) => {
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserById = (req, res) => {
  let sql = 'SELECT * FROM users WHERE user_id = ?';
  const replacements = [req.params.user_id]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if(err) return handleSQLError(res,err)
    return res.json(rows);
  })
}

const createUser = (req, res) => {
  // Insert into users username, password, first name, last name
  let sql = "INSERT INTO users (??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)"
  // What goes into brackets
  // let user = req.body
  const replacements = [
    'user_name',
    'user_password',
    'first_name',
    'last_name',
    "email",
    "city",
    "state",
    req.body.user_name,
    req.body.user_password,
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.city,
    req.body.state
  ]
  sql = mysql.format(sql,replacements)

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId})
  })
}
module.exports = {
  getAllUsers,
  getUserById,
  createUser
}