"use strict";

const express = require('express'),
    router = express.Router(),
    multer = require('multer'),
    Converter = require("csvtojson").Converter,
    csvData = require('../models/csv-data');

const upload = multer({ storage: multer.memoryStorage({}) });

router.get('/', function(req, res) {
  res.render('upload/form', { active: 'upload' });
})

router.post('/', upload.single('csvData'), function(req, res) {
  if (!req.file) {
    res.render('upload/result', { active: 'upload', success: false, message: 'No file' });
    return;
  }

  const csvConverter = new Converter({ delimiter: [',']});

  csvConverter.fromString(req.file.buffer.toString('utf-8'), function(err,result){
    let success, message;

    if (err) {
      res.render('upload/result', { active: 'upload', success: false, message: err });
      return;
    }
    else {
      csvData.add(result);
      res.render('upload/result', { active: 'upload', success: true, message: 'File is uploaded and parsed' });
      return;
    }
  });
})

module.exports = router
