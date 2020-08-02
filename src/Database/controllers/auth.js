const axios = require('axios')
const mysql = require('mysql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../sql/connection')
const { handleSQlError } = require('../sql/error')

// for bcrypt
const saltRounds = 10

const login = (req, res) => {
  const { username, passwood } = req.body

  axios()
}