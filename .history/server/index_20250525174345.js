const express=require('express');
const cors=require('cors');




const app=express();
app.use(cors());
app.use(express.json());
app.u



app.listen(8080,()=>{
    console.log('Server is running on port 8080');
}); 