const config = require('../config');

const db = require('knex')({
  client: 'mysql',
  connection: {
    host : config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
  },
  pool: { 
    min: 0,
    max: 10,
  }
});

// check the connection:
db.raw('SELECT 1+1 as result;').then(() =>{
  console.log('connection successful');
}).catch(err => {
  console.log('connection failed');
  console.log(err);
})

module.exports = { db };
