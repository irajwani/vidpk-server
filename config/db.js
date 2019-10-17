var {postgreSqlConfig} = require('../credentials/keys');

const Pool = require('pg').Pool
const db = new Pool(postgreSqlConfig);

module.exports = db;