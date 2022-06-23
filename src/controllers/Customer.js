const router = require("express").Router()
const Customer = require("../models/customer")
const jwt = require("jsonwebtoken")
const generateAuthToken = require("./../middleware/generateAuthToken")
const auth= require("./../middleware/auth")

// ===============creates a customer==========================
// ===============creates a customer==========================
// ===============creates a customer==========================

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

// ===============Fetches all customers==========================
// ===============Fetches all customers==========================
// ===============Fetches all customers==========================


router.get('/fetch_all', auth, async (req, res)=>{
 try{
  const customers = await Customer.find()

  return res.status(200).json({
    status: true,
    message: "Customers fetched successfully!",
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


// ===============Fetches a specific customer==========================
// ===============Fetches a specific customer==========================
// ===============Fetches a specific customer==========================


router.get('/fetch/:id', auth, async (req, res)=>{
  try{
    const id = req.params.id
    // res.send(req.params.id)

   const customer = await Customer.findById(id)
 
   return res.status(200).json({
     status: true,
     message: "Customer fetched successfully!",
     data: customer
   })
  }catch(err){
   return res.status(400).json({
     status: false,
     message: err.message,
     data: null
   })
  }
 })


// ===============Edit customer data==========================
// ===============Edit customer data==========================
// ===============Edit customer data==========================

router.post('/edit/:id', auth, async (req, res)=>{
  try {
    const id = req.params.id
    if (req.body){
      if(req.body.user.email){
        const email = req.body.user.email
        const checkEmailExist = await Customer.find({email: email})
        if(checkEmailExist.length > 1){
          return res.status(400).json({
            status: false,
            message: "Customer with this email already exists!",
            data: null
          })
        }
      }

      const customer = await Customer.findByIdAndUpdate(id, req.body.user)
 
        if(!customer){
          return res.status(400).json({
            status: false,
            message: "Customer not founded on this ID",
            data: null
          })
        }
      return res.status(200).json({
        status: true,
        message: "Customer updated successfully!",
        data: customer
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

module.exports = router   