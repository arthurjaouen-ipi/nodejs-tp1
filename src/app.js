// Init
const express = require('express')
const parth = require('path')
const app = express()
app.use(express.json())

// DB
const connect = require('./database/mongodb')
connect()

// Routers
const adminRouter = require('./routers/admin.router')
app.use('/', adminRouter)
const athleteRouter = require('./routers/athlete.router')
app.use('/', athleteRouter)
const sportRouter = require('./routers/sport.router')
app.use('/', sportRouter)

// Start
app.listen(8080, () => {
    console.log("Server running")
})