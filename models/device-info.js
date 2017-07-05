var mongoose = require('mongoose');

var DeviceInfoSchema = new mongoose.Schema({
  time:  {
    type: Date,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  so:   {
    type: String,
    required: true
  },
  version:   {
    type: String,
    required: true
  },
  model:   {
    type: String,
    required: true
  },
  macaddress:   {
      type: String,
      required: true
  }, 
  connections:   {
    type: Number,
    required: true
  },
  logTime:   {
    type: Date,
    required: true
  },
});

module.exports = mongoose.model('DeviceInfo', DeviceInfoSchema);
