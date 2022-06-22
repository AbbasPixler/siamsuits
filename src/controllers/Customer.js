const router = require("express").Router()
const Customer = require("../models/customer")
const jwt = require("jsonwebtoken")
const generateAuthToken = require("./../middleware/generateAuthToken")
const auth= require("./../middleware/auth")


router.post("/createCustomer", auth, async(req, res)=>{
try {
  if (req.body){
    const email = req.body.email
    const checkEmailExist = await Customer.find({email: email})
    if(checkEmailExist.length > 0){
      return res.status(400).json({
        status: false,
        message: "Customer Already exists!",
        data: null
      })
    }
  
    const newCustomer = new Customer(req.body.user)

    await newCustomer.save()
    return res.status(200).json({
      status: true,
      message: "New Customer created!",
      data: req.body.user
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

router.get('/fetch_all', auth, async (req, res)=>{
 try{
  const customers = await Customer.find()

  return res.status(200).json({
    status: true,
    message: "Customer fetched successfully!",
    data: customers
  })
 }catch(err){
  return res.status(400).json({
    status: false,
    message: err.message,
    data: null
  })
 }


})

module.exports = router   