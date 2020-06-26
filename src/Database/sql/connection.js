const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool =mysql.createPool({
        connectionLimit: 100,
        host: '34.70.213.252',
        user: 'root',
        password: 'password',
        database: 'admin'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;