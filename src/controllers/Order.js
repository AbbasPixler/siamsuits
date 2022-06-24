const router = require("express").Router()
const Order = require("../models/order")
const auth = require("./../middleware/auth")


router.post('/create', auth, async (req, res)=>{
  try{
    if(req.body){
      const order = await Order.create(req.body)
      return res.status(200).json({
        status: true,
        message: "New Order created!",
        data: order
      }) 
    }
  }catch(err){
    return res.status(400).json({
      status: false,
      message: err.message,
      data: null
    }) 
  }
})


// ===============Fetches all Orders==========================
// ===============Fetches all Orders==========================
// ===============Fetches all Orders==========================


router.get('/fetchAll', auth, async (req, res)=>{
  try{
   const order = await Order.find()
 
   return res.status(200).json({
     status: true,
     message: "Order fetched successfully!",
     data: order
   })
  }catch(err){
   return res.status(400).json({
     status: false,
     message: err.message,
     data: null
   })
  }
 })

// ===============Fetches a specific order==========================
// ===============Fetches a specific order==========================
// ===============Fetches a specific order==========================


router.get('/fetch/:id', auth, async (req, res)=>{
  try{
    const id = req.params.id
    // res.send(req.params.id)

   const order = await Order.findById(id)
 
   return res.status(200).json({
     status: true,
     message: "Order fetched successfully!",
     data: order
   })
  }catch(err){
   return res.status(400).json({
     status: false,
     message: err.message,
     data: null
   })
  }
 })


// ===============Fetches orders from a specific customer==========================
// ===============Fetches orders from a specific customer==========================
// ===============Fetches orders from a specific customer==========================


router.get('/fetch/:id', auth, async (req, res)=>{
  try{
    const id = req.params.id
    // res.send(req.params.id)

   const orders = await Order.find({customer_id: id})
 
   return res.status(200).json({
     status: true,
     message: "Orders fetched successfully!",
     data: orders
   })
  }catch(err){
   return res.status(400).json({
     status: false,
     message: err.message,
     data: null
   })
  }
 })

module.exports  = router






