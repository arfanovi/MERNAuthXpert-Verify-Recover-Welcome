const express = require("express");
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser')
const router = require('./routes/user.auth')

// Connection DB 
const connectDB = require('./Database/DB')
connectDB()

const cors = require('cors')
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// Routes 
app.use('/api/users', router)

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.listen(PORT, () =>{
    console.log(`Server is Running and Port is ${PORT}`)
})