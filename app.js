const express = require('express')
const app = express()
const path = require('path');

// API
require('./API/admin.js')(app)
require('./API/athlete.js')(app)
require('./API/sport.js')(app)

app.use(express.json())

// All admin
app.get('/', (req,res) => {
    res.end('Accueil')
})


app.listen(8080, () => {
    console.log("Server running")
})