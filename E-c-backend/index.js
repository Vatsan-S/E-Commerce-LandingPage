import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from "./config/database.js";
import productRouter from "./Routes/productRoute.js";


dotenv.config()


const app = express()

// middleware

app.use(express.json())

app.use(cors())


// database connection
connectDB()


// routes / endpoints
app.use('/api/product', productRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})


app.listen(process.env.PORT,()=>{
    console.log("Server Connected",process.env.PORT)
})