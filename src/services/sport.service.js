const Sport = require('../models/sport.model')

class SportService {
    constructor() {}

    async create(sport) {
        const newVal = new Sport({
            name: sport,
            athletes: []
        })

        await newVal.save()
        return newVal
    }
}

module.exports = SportService