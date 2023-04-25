import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express()
//Middleware
app.use(cookieParser())
app.use(express.json())
const PORT = 3000;

//Database Connection
const connect = async () =>{
    try {
        await mongoose.connect(process.env.DB);
        console.log("DB connected")
      } catch (error) {
        throw error;
    }
} 

//If MongoDB gets Disconnected or Connected
mongoose.connection.on('disconnected', ()=>{
    console.log('MongoDB Disconnected')
})
mongoose.connection.on('connected', ()=>{
    console.log('MongoDB Connected')
})



// Routes 
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

//Middlewares handler
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong" 
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})


app.listen(PORT, (req, res) => {
    connect();
    console.log(`The server is running on port ${PORT}`)
})