const express = require('express')
const router = express.Router()

const AdminController = require('../controllers/admin.controller')
const adminController = new AdminController()

// Create admin
router.post('/api/users', async (req,res) => {
    await adminController.create(req, res)
    res.redirect('/users')
})

// Delete admin
router.delete('/api/users/:userId', async (req,res) => {
    adminController.delete(req, res)
})

// Update admin
router.put('/api/users/:userId', async (req,res) => {
    adminController.update(req, res)
})

// All admin
router.get('/api/users', async (req,res) => {
    adminController.getAllAdmins(req, res)
})

// Specific admin
router.get('/api/users/:userId', async (req,res) => {
    adminController.getAdminById(req, res)
})

module.exports = router