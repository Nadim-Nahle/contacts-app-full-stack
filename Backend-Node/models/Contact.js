const mongoose = require('mongoose');
//CONTACT SCHEMA
const contactSchema = new mongoose.Schema({

  fname: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },

  phone: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },

  email: {
    type: String,
    required: false,
    min: 6,
    max: 255,
    unique: true,
  },

  relation: {
    type: String,
    required: false,
    min: 2,
    max: 1024,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  lat: {
    type: Number,
  },

  lng: {
    type: Number,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  }

});

module.exports = mongoose.model('Contact', contactSchema);