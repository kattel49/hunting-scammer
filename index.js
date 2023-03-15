const express = require('express')
const mongoose = require('mongoose')

URI = "mongodb+srv://shubhushan:shubhushan@cluster0.z3hreyi.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {console.log("connected")})
.catch((err) => {console.log("error")})

const app = express()
const PORT = process.env.PORT || 5001

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use("/", require("./routes/form"));

app.listen(PORT, console.log("Server starting on port: ", PORT))