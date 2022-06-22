const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGOURL)
.then(console.log("MongoDB connection successful"))
.catch((err) => console.log(err));