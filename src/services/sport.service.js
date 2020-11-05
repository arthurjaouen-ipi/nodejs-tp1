const Sport = require('../models/sport.model')

class SportService {
    constructor() {}

    async create(sportId, sport) {
        const newVal = new Sport({
            name: sport.name,
            athletes: [],
            _Id: sportId
        })

        await newVal.save()
        return newVal
    }
}

module.exports = SportService