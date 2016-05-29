const low = require('lowdb');
const db = low('db.json')

db.defaults({ "csvData": [] }).value;

module.exports = db;
