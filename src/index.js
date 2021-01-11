const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://****:******@cluster0.i83km.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log('Mongo Db connected')
})

mongoose.connection.on('error',(err)=>{
    console.log('Error while connecting to mongo',err)
})

app.get('/',(req,res)=>{
    res.send('Hello there');
})

app.listen(3000,()=>{
    console.log('Backend Server listening to port 3000');
})