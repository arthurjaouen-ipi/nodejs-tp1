const express = require('express')
const router = express.Router()

const AdminController = require('../controllers/admin.controller')
const adminController = new AdminController()

// Create admin
router.post('/api/admins', async (req,res) => {
        
})

// Delete admin
router.delete('/api/admins/:adminId', async (req,res) => {
    
})

// Update admin
router.put('/api/admins/:adminId', async (req,res) => {
    
})

// All admin
router.get('/api/admins', async (req,res) => {
    
})

// Specific admin
router.get('/api/admins/:adminId', async (req,res) => {
    
})

module.exports = router