const express = require('express'),
      router = express.Router(),
      csvData = require('../models/csv-data'),
      _ = require('lodash');

router.get('/', function(req, res) {
  const data = csvData.get();

  const keys = _.uniq(_.reduce(data, function(result, value) {
      return _.concat(result, _.keys(value))
  }, []));

  res.render('grid/grid', { active: 'grid', keys: keys, rows: data });
});

router.post('/edit', function(req, res) {
  csvData.edit(req.body.rowId, req.body.columnKey, req.body.newValue);
  res.send('It worked!');
});

module.exports = router
