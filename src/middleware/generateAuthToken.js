const jwt =require("jsonwebtoken")

const generateAuthToken = (id)=>{
  const token = jwt.sign({id: id.toString()},  process.env.JWTSECRET)
  return token

}

module.exports = generateAuthToken