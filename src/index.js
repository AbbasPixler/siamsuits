const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
const multer = require("multer")

require("./mongoose/mongoose")
const app = express()
const Port = process.env.PORT || 4545

app.use(express.urlencoded({ extended: false}))
app.use(express.json())


const upload = multer({ dest: 'uploads/' })
// Routes====================================

const AuthRoute = require("./controllers/Authentication")
const CustomerRoute = require("./controllers/Customer")
const OrderRoute = require("./controllers/Order")

// app.get("/", (req, res)=>{
//   res.send("HELLO")
// })

// app.use("/", express.static(path.join(__dirname, "/public")))

// Defining Paths for routes=========================

dotenv.config()

app.use('/auth', AuthRoute)
app.use('/customer', CustomerRoute)
app.use('/order', OrderRoute)



app.listen(Port, ()=>{
  console.log("App is listening on port: "+ Port)
})

