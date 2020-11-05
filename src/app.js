// Init
const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())

// HBS
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

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

// Default
app.get('/', (req,res) => {
    res.render('index', {});
})

// Start
app.listen(8080, () => {
    console.log("Server running")
})