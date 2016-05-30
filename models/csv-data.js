const db = require('./storage'),
      _ = require('lodash');

module.exports.add = function(data) {
  db.set('csvData', data).value();
}

module.exports.get = function() {
  return db.get('csvData').value();
}

module.exports.edit = function(id, key, value) {
  var assign = {};
  assign[key] = value;

  console.log(assign);

  var a = db.get('csvData')
    .filter(function(v, i) {
      return i == id * 1;
    })
    .first()
    .assign(assign)
    .value();
}
