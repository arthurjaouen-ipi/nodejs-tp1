const Admin = require('../models/admin.model')

class AdminService {
    constructor() {}

    async create(admin) {
        const newVal = new Admin({
            username: admin.username,
            password: admin.password
        })

        await newVal.save()
        return newVal
    }

    async verifExiste(admin){
        return await Admin.findOne({
            username: admin.username,
            password: admin.password
        });
    }

    async delete(userId){
        await Admin.deleteOne({'_id': userId})
    }

    async update(userId, data){
        await Admin.updateOne({'_id': userId}, data) 
    }

    async getAllAdmins() {
        return Admin.find({})
    }

    async getAdminById(userId){
        return await Admin.find({"_id": userId})
    }
}

module.exports = AdminService