const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
  firstname:{
    type: String,
    required: true
  },
  lastname:{
    type: String,
    required: true
  },
  gender:{
    type: String,
    requried: true
  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  phone: {
    type: Number,
    required: true
  },

}) 
const Customer = mongoose.model("Customer", customerSchema)
module.exports = Customer