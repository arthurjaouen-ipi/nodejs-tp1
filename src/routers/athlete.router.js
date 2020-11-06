const express = require('express')
const router = express.Router()

const AthleteController = require('../controllers/athlete.controller')
const athleteController = new AthleteController()

// Create athlete
router.post('/api/athletes', async (req,res) => {
    await athleteController.create(req, res)
    res.redirect('/athletes')
})

// Delete athlete
router.delete('/api/athletes/:athleteId', async (req,res) => {
    athleteController.delete(req, res)
})

// Update athlete
router.put('/api/athletes/:athleteId', async (req,res) => {
    athleteController.update(req, res)
})

// All athletes
router.get('/api/athletes', async (req,res) => {
    athleteController.getAllAthletes(req, res)
})

// Specific athlete
router.get('/api/athletes/:athleteId', async (req,res) => {
    athleteController.getAthleteById(req, res)
})

// All sports of specific athlete
router.get('/api/athletes/:athleteId/sports', async (req,res) => {
    athleteController.getSportsByAthleteId(req, res)
})

// All athletes of specific country
router.get('/api/countries/:country/athletes', async (req,res) => {
   athleteController.getAthletesByCountry(req,res)
})

module.exports = router