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

// Models
const Sport = require('./models/sport.model')
const Athlete = require('./models/athlete.model')

// Routers
const adminRouter = require('./routers/admin.router')
app.use('/', adminRouter)
const athleteRouter = require('./routers/athlete.router')
app.use('/', athleteRouter)
const sportRouter = require('./routers/sport.router')
app.use('/', sportRouter)

// Default
app.get('/', (req,res) => {
    res.redirect('/sports');
})

// Sports
app.get('/sports', async (req,res) => {
    const title = 'Sports'
    const sports = await Sport.find({})
    res.render('sports', { sports, title });
})

// Athlètes
app.get('/athletes', async (req,res) => {
    const title = 'Athlètes'
    const athletes = await Athlete.find({})
    res.render('athletes', { athletes, title });
})

// Pays
app.get('/pays', (req,res) => {
    const title = 'Pays'
    res.render('pays', { title });
})

// Start
app.listen(8080, () => {
    console.log("Server running")
})