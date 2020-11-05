// Init
const express = require('express')
const app = express()
app.use(express.json())

// DB
const connect = require('./database/mongodb');
//connect()

// API
require('./api/admin.api.js')(app)
require('./api/athlete.api.js')(app)
require('./api/sport.api.js')(app)

// Default
app.get('/', (req,res) => {
    res.end('Accueil')
})

// Start
app.listen(8080, () => {
    console.log("Server running")
})