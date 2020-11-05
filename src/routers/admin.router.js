const express = require('express')
const router = express.Router()

const AdminController = require('../controllers/admin.controller')
const adminController = new AdminController()

// Create admin
router.post('/api/users', async (req,res) => {
        
})

// Delete admin
router.delete('/api/users/:userId', async (req,res) => {
    
})

// Update admin
router.put('/api/users/:userId', async (req,res) => {
    
})

// All admin
router.get('/api/users', async (req,res) => {
    
})

// Specific admin
router.get('/api/users/:userId', async (req,res) => {
    
})

module.exports = router