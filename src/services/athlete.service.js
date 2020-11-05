const Athlete = require('../models/athlete.model')

class AthleteService {
    constructor() {}

    async create(athleteId, athlete) {
        const newVal = new Athlete({
            firstName: athlete.firstName,
            lastName: athlete.lastName,
            gender: athlete.gender,
            country: athlete.country,
            _Id: athleteId
        })

        await newVal.save()
        return newVal
    }
}

module.exports = AthleteService