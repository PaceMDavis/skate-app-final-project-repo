const mysql = require('mysql')
const pool = require('../sql/connection')
const {handleSQLError} = require('../sql/error')

const getAllSpots = (req,res) => {
  pool.query("SELECT * FROM spots", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getSpotById = (req, res) => {
  let sql = 'SELECT * FROM ?? WHERE ?? + ? LIMIT 10';
  const replacements = ['spots', 'spot_id', req.params.spot_id]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if(err) return handleSQLError(res,err)
    return res.json(rows);
  })
}

const createSpot = (req,res) => {
  let sql = "INSERT INTO spots (??, ??, ??) VALUES (?, ?, ?)"
  const replacements = [
    'spot_name',
    'spot_address',
    'photo_1',
    req.body.spot_name,
    req.body.spot_address,
    req.body.photo_1
  ]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err,results) => {
    if (err) return handleSQLError(res,err)
    return res.json({newId: results.insertId})
  })
}

module.exports = {
  getAllSpots,
  getSpotById,
  createSpot
}