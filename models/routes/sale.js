
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Sale = require('../../schema/saleSchema.js')


mongoose.connect('localhost:27017/realestate');

router.get('/', function (req, res) {
  Sale.find({ cost: { $exists: true } }, function (err, data) {
    if (err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      console.log(data);
      res.send(data);
    }
  })
})
module.exports = router;