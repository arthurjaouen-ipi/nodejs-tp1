const express = require('express')
const router = express.Router()

const SportController = require('../controllers/sport.controller')
const sportController = new SportController()

// Create sport
router.post('/api/sports', async (req,res) => {
    sportController.create(req, res)
})

// Delete sport
router.delete('/api/sports/:sportId', async (req,res) => {
    
})

// Update sport
router.put('/api/sports/:sportId', async (req,res) => {
    
})

// All sports
router.get('/api/sports', async (req,res) => {

})

// Specific sport
router.get('/api/sports/:sportId', async (req,res) => {

})

// All athletes of specific sport
router.get('/api/sports/:sportId/athletes', async (req,res) => {
    
})

// Add athlete in sport
router.post('/api/sports/:sportId/athletes/:athleteId', async (req,res) => {
    
})

// Remove athlete from sport
router.delete('/api/sports/:sportId/athletes/:athleteId', async (req,res) => {
    
})

module.exports = router