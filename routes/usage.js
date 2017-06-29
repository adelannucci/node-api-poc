var express = require('express');
var router = express.Router();
var json2csv = require('json2csv');
var mongoose = require('mongoose');

router.get('/', (req, res, next) => {
  mongoose.model('Usage').find().then((info) => {
    res.render('index',{
      data: info
    });
  },next);
});

router.get('/all', (req, res, next) => {
  mongoose.model('Usage').find().then((info) => {
    res.json({
      data: info
    });
  },next);
});

router.get('/csv', (req, res, next) => {
  mongoose.model('Usage').find().then((info) => {
    var fields = ['_id', 'time', 'lat', 'lng', 'so', 'version', 'model', 'macaddress', 'connections', '__v'];
    var result = json2csv({ data: info, fields: fields });
    console.log(result);
    res.setHeader('Content-disposition', 'attachment; filename=data.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send(result);
  },next);
});

router.get('/add',(req,res,next)=>{
  res.render('add');

});

router.post('/add',(req,res,next)=>{
  var Usage = mongoose.model('Usage');
  var m = new Usage(req.body);
  var date = new Date();
  m.logTime = date.getTime();

  m.save().then((result) => {
    res.json(result);
  },next);

});

router.post('/',(req,res,next)=>{
  var Usage = mongoose.model('Usage');
  var m = new Usage(req.body);
  var date = new Date();
  m.time = date.getTime();
  m.logTime = date.getTime();

  console.log(m);

  m.save().then((result) => {
    res.redirect('/');
  },next);

});

router.get('/show/:id',(req,res,next)=>{
  const {id} = req.params;

  mongoose.model('Usage').findOne({_id: id}).then((info) => {
    res.render('show.njk', {data: info});
  },next);
});

router.delete('/delete/:id', (req,res,next)=>{
  const {id} = req.params;

  mongoose.model('Usage').remove({_id: id}).then((info) => {
    res.redirect('/')
  },next);

});

module.exports = router;
