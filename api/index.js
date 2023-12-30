import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log(" Mongodb Connection is Successfully ")
}).catch((error)=>{
    console.log(`This is the error: {error}`)
})
const app=express();

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})