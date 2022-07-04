import express from "express";
import env from "dotenv"
import bodyParser from "body-parser";
import { AppDataSource } from "./data-source";

const userData = require('./routes/userRoutes');
const profileData = require('./routes/profileRoute');
const itemData = require('./routes/itemRoute')
const paymentData = require('./routes/paymentRoute')

const app = express()

env.config()

app.use(bodyParser.urlencoded({ extended: false }))

AppDataSource.initialize()
.then(()=>{
    console.log('Database connected successfully!!!')
})

app.use(express.json())
app.use('/api', userData)
app.use('/api', profileData)
app.use('/api', itemData)
app.use('/api', paymentData)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on PORT: ${process.env.PORT}`)
})
 