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
const AthleteController = require('./controllers/athlete.controller')
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
    let sportList = await Sport.find({})

    for (let key in athletes) {
        athletes[key].sports = []
        let sportsOfAthlete = await Sport.find({athletes: athletes[key]._id})

        for(let key2 in sportsOfAthlete) {
            athletes[key].sports.push(sportsOfAthlete[key2].name)
        }
    }

    res.render('athletes', { athletes, sportList, title });
})

// Pays
app.get('/pays', async (req,res) => {
    const title = 'Pays'
    const countryUsed = await Athlete.find({}).distinct('country')
    let country = []

    for (let key in countryUsed){
        country.push({code: countryUsed[key], athletes: await Athlete.find({country: countryUsed[key]})})
    }

    res.render('pays', { country, title });
})

app.get('/users', async (req,res) => {
    const title = 'Utilisateurs admin'
    const users = await Admin.find({})

    res.render('users', { users, title });
})

// Start
app.listen(8080, () => {
    console.log("Server running")
})