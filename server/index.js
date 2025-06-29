require('dotenv').config();         
// This code initializes an Express server with CORS and JSON body parsing enabled. 
// It listens on a port specified in the environment variables. 
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const getConnection=require('./utils/getConnection'); // Import the getConnection function  
const userRoutes=require('./routes/user'); // Import user routes
const homeRoutes=require("./routes/home")



const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',homeRoutes);
app.use('/user/auth',userRoutes); // Use user routes for API requests


app.use((error,req,res,next)=>{
    // This middleware handles errors that occur in the application.
    const message = error.message || 'Internal Server Error';
    const statusCode = error.statusCode || 500;

    res.status(statusCode).json({message: message});
});

getConnection();
app.listen(process.env.PORT,()=>{
    console.log('Server is running on port : ' +process.env.PORT ); 
}); 