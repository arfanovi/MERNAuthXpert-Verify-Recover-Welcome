
const User = require("../models/User");


// Signup
module.exports.signup = async (req, res) => {
    // console.log(req.body);
    // res.send("Success")

    // All Field Required
    const { name, email, password } = req.body;
    if(!name || !email || !password){

        return res.status(401).json({message: "All fields are required"})
    }

    // Check if user exist
    const userExist = await User.findOne({email});
    if(userExist){
        return res.status(401).json({message: "User already exist"})
    }

    // Create New User
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    // Hash Password


    // Save User
    newUser.save().then(() =>{
        res.send({code: 200, message: "Success"})
    })
    .catch((err) =>{
        res.send({code: 500, message:"Signup Error", err})
    })
}