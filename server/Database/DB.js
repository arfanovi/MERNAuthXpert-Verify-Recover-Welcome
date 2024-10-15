const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();


const Database_URL = process.env.DATABASE_URL;

const connectDB = async () =>{
    try {
        await mongoose.connect(Database_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })
        console.log("Database Connected")
    } catch(error){
        console.log('Database Connection Failed',error);
        process.exit(1);
    }
}


module.exports = connectDB