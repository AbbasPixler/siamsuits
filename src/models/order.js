const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

  customer_id:{
    type: String,
    required: true
  },
  products: [
  {
    product_name:{
      type: String
    },
    quantity:{
      type:Number
    },
  }
  ],
  created_at:{
    type: Date,
    default: Date.now()
  },
  status:{
    type: String,
    default: "Pending"
  }
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order