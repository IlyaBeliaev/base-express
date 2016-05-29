var express = require('express')
  , router = express.Router()

router.use('/', require('./grid'))
router.use('/upload', require('./upload'))

module.exports = router
