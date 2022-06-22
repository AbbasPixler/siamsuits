const jwt = require("jsonwebtoken")
const Admin = require("./../models/admin")

const auth = async (req, res, next)=>{
 
  try{
    const decode = jwt.verify(req.body.token, process.env.JWTSECRET)
  const user = await Admin.findById(decode.id)
  // console.log(user)
  if(!user){
    return res.status(400).json({
            status: false,
            message: "Data not found",
            data: null
          })
  }else{
    req.body.admin = user
  }
  next()
   
  }catch(err){
    return res.status(400).json({
      status: false,
      message:err.message,
      data: null
    })
  }
}

module.exports = auth
