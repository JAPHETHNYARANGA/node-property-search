import express from 'express';
import dotenv from 'dotenv';


const app = express()
const port = process.env.PORT || 5050


app.use(express.json())


app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})