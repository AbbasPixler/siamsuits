const router = require("express").Router()
const Admin = require("../models/admin")
const jwt = require("jsonwebtoken")
const generateAuthToken = require("./../middleware/generateAuthToken")

router.post("/login", async(req, res)=>{
  
  try{
       const user = await Admin.findOne(req.body)
    if(!user){
      res.status(400).send("Wrong Username or Password!")
    }
    const token = generateAuthToken(user._id.toString())
    const newUser = {
      username : user.username,
      token: token
    }
    res.status(200).send(newUser)
  }catch(err){
    res.status(400).send("Some Other error!")
  }
})

module.exports = router