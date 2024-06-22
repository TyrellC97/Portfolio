const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express() 

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log ('Connected to DB'))


const projectRouter = require('./routes/project') 
app.use('/projects', projectRouter)


app.listen(3000, () => {console.log("listening on port 3000")})