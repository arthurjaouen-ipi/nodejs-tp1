// Init
const path = require('path')
const express = require('express')
const app = express()
app.use(express.json())
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

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

    for (let key in sports) {
        for(let key2 in sports[key].athletes) {
            sports[key].athletes[key2] = await Athlete.findById(sports[key].athletes[key2])
        }
    }

    res.render('sports', { sports, title });
})

// Athlètes
app.get('/athletes', async (req,res) => {
    const title = 'Athlètes'
    let athletes = await Athlete.find({})

    res.render('athletes', { athletes, title });
})

// Pays
app.get('/pays', async (req,res) => {
    const title = 'Pays'
    const country = await Athlete.find({}).distinct('country')
    res.render('pays', { country, title });
})

// Start
app.listen(8080, () => {
    console.log("Server running")
})