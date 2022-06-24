const router = require("express").Router()
const Admin = require("../models/admin")
const jwt = require("jsonwebtoken")
const generateAuthToken = require("./../middleware/generateAuthToken")

router.post("/login", async(req, res)=>{
  
  try{
       const user = await Admin.findOne(req.body)
    if(!user){
      return res.status(400).json({
        status: false,
        message: "Wrong Username or Password!",
        data: null
      })
    }
    const token = generateAuthToken(user._id.toString())
    const newUser = {
      username : user.username,
      token: token
    } 
    return res.status(200).json({
      status: true,
      message: "Logon successfull!",
      data: newUser
    })
  }catch(err){
    return res.status(400).json({
      status: false,
      message: err,
      data: null
    })
  }
})

module.exports = router