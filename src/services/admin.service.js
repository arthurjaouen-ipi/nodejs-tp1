const Admin = require('../models/admin.model')

class AdminService {
    constructor() {}

    async create(adminId, admin) {
        const newVal = new Admin({
            username: admin.username,
            password: admin.password,
            _Id: adminId
        })

        await newVal.save()
        return newVal
    }
}

module.exports = AdminService