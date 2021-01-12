const mongoose = require('mongoose');

const userScehma = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true    
    }
})

mongoose.model('User',userScehma);