import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import router from "./routes/userRoutes.js"
import mongoose from "mongoose"
import cors from "cors"

const app=express()
const PORT=process.env.PORT 

app.use(express.json())
app.use(cors())


app.use('/',router)

mongoose.connect('mongodb://127.0.0.1:27017/PETSCUE').then(result=>{
  console.log('mongo db connected');
}).catch(err=>{
  console.log(err);
});



app.listen(PORT,()=>{
    console.log(`backend running at ${PORT}`);
})