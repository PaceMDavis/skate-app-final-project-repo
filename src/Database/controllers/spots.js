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
  
}

module.exports = {
  getAllSpots
}