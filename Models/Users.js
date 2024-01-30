const mongoose = require('mongoose')    
const  Users = mongoose.Schema({
    name : {
        type : String,
    },
    email:{
        type:String,
        unique: true, required: true 
    },
    password:{
        type:String,
        required: true 
    }
})
module.exports = mongoose