// Init
const express = require('express')
const app = express()
app.use(express.json())

// DB
const connect = require('./db/mongodb');
//connect()

// API
require('./api/admin.js')(app)
require('./api/athlete.js')(app)
require('./api/sport.js')(app)

// Default
app.get('/', (req,res) => {
    res.end('Accueil')
})

// Start
app.listen(8080, () => {
    console.log("Server running")
})