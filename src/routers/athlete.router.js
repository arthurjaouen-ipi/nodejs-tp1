const express = require('express')
const router = express.Router()

const AthleteController = require('../controllers/admin.controller')
const athleteController = new AdminController()

// Create athlete
router.post('/api/athletes', async (req,res) => {
        
})

// Delete athlete
router.delete('/api/athletes/:athleteId', async (req,res) => {
    
})

// Update athlete
router.put('/api/athletes/:athleteId', async (req,res) => {
    
})

// All athletes
router.get('/api/athletes', async (req,res) => {
    
})

// Specific athlete
router.get('/api/athletes/:athleteId', async (req,res) => {
    
})

// All sports of specific athlete
router.get('/api/athletes/:athleteId/sports', async (req,res) => {
    
})

// All athletes of specific country
router.get('/api/countries/:countryId/athletes', async (req,res) => {
   
})

module.exports = router