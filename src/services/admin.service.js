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
}

module.exports = AdminService