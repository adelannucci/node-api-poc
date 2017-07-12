var express = require('express');
var router = express.Router();
var json2csv = require('json2csv');
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

//api
router.get('/device', (req, res, next) => {
  mongoose.model('DeviceInfo').find().then((info) => {
    res.json({
      data: info
    });
  },next);
});

router.get('/model', (req, res, next) => {
  mongoose.model('DeviceModel').find().then((info) => {
    res.json({
      data: info
    });
  },next);
});

router.post('/device',(req,res,next)=>{
  var DeviceInfo = mongoose.model('DeviceInfo');
  var m = new DeviceInfo(req.body);
  var date = new Date();
  m.logTime = date.getTime();

  m.save().then((result) => {
    res.json(result);
  },next);

});

router.get('/device/csv', (req, res, next) => {
  mongoose.model('DeviceInfo').find().then((info) => {
    var fields = ['time', 'lat', 'lng', 'so', 'version', 'model', 'macaddress', 'connections'];
    var result = json2csv({ data: info, fields: fields });
    res.setHeader('Content-disposition', 'attachment; filename=data.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send(result);
  },next);
});

//web
router.get('/', (req, res, next) => {
  mongoose.model('DeviceInfo').find().then((info) => {
    res.render('device/list.njk',{
      data: info
    });
  },next);
});

router.get('/device/add',(req,res,next)=>{
  res.render('device/add.njk');
});

router.post('/device/add',(req,res,next)=>{
  var DeviceInfo = mongoose.model('DeviceInfo');
  var m = new DeviceInfo(req.body);
  var date = new Date();
  m.time = date.getTime();
  m.logTime = date.getTime();

  m.save().then((result) => {
    res.redirect('/');
  },next);

});

router.get('/device/show/:id',(req,res,next)=>{
  const {id} = req.params;

  mongoose.model('DeviceInfo').findOne({_id: id}).then((info) => {
    res.render('device/show.njk', {data: info});
  },next);
});

router.delete('/device/delete/:id', (req,res,next)=>{
  const {id} = req.params;

  mongoose.model('DeviceInfo').remove({_id: id}).then((info) => {
    res.redirect('/')
  },next);

});

//model
router.get('/model/:page', (req, res, next) => {

  const {page} = req.params;
  var perPage = 50;

  mongoose.model('DeviceModel')
  .paginate({}, { page: page, limit: perPage })
  .then((info) => {
    res.render('model/list.njk',{
      data: info.docs,
      current: page,
      total: info.total,
      pages: info.total/perPage
    });
  },next);
  
});

router.get('/model/show/:id',(req,res,next)=>{
  const {id} = req.params;

  mongoose.model('DeviceModel').findOne({_id: id}).then((info) => {
    res.render('model/show.njk', {data: info});
  },next);
});

router.get('/model/add',(req,res,next)=>{
  res.render('model/add.njk');
});

router.post('/model/add',(req,res,next)=>{
  var DeviceInfo = mongoose.model('DeviceModel');
  var m = new DeviceInfo(req.body);
  var date = new Date();
  m.time = date.getTime();
  m.logTime = date.getTime();

  m.save().then((result) => {
    res.redirect('/model');
  },next);

});

router.delete('/model/delete/:id', (req,res,next)=>{
  const {id} = req.params;

  mongoose.model('DeviceModel').remove({_id: id}).then((info) => {
    res.redirect('/model')
  },next);

});

module.exports = router;
