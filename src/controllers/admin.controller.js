const AdminService = require('../services/admin.service')

class AdminController {
    constructor() {
        this.adminService = new AdminService()
    }

    // Create user
    async create(req, res) {
        const exists = await this.adminService.verifExiste(req.body)
        if(!exists){
            const newAdmin = {
                username: req.body.username,
                password: req.body.password
            };

            const newVal = await this.adminService.create(newAdmin)
            res.send(newVal)
        }
        else {
            console.log('User already exists in db.')
            res.status(500).end()
        }
    }

    // Delete user
    async delete(req, res) {
        await this.adminService.delete(req.params.userId)
        res.end()
    }

    // Update user
    async update(req, res) {
        const admins = await this.adminService.update(req.params.userId, req.body)
        res.status(200).end(admins)
    }

    // All user
    async getAllAdmins(req, res) {
        const admins = await this.adminService.getAllAdmins()
        res.status(200).send(admins)
    }

    // Specific user
    async getAdminById(req, res) {
        const admins = await this.adminService.getAdminById(req.params.userId)
        res.status(200).send(admins)
    }
}


module.exports = AdminController