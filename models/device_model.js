var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var DeviceModelSchema = new mongoose.Schema({
  retailBranding:  {
    type: String,
    required: false
  },
  marketingName: {
    type: String,
    required: false
  },
  device: {
    type: String,
    required: true
  },
  model:   {
    type: String,
    required: true
  }
});

DeviceModelSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('DeviceModel', DeviceModelSchema);