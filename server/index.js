const express = require("express");
const app = express();
const PORT = 5000;
// const bodyParser = require('body-parser')
const router = require('./routes/user.auth')

// Connection DB 
const connectDB = require('./Database/DB')
connectDB()

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' })); // Only allows requests from the frontend


// parse application/x-www-form-urlencoded
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Routes 
app.use('/api/users', router)

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.listen(PORT, () =>{
    console.log(`Server is Running and Port is ${PORT}`)
})