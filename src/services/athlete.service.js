const Athlete = require('../models/athlete.model')

class AthleteService {
    constructor() {}

    async create(athlete) {
        const newVal = new Athlete({
            firstName: athlete.firstName,
            lastName: athlete.lastName,
            gender: athlete.gender,
            country: athlete.country
        })

        await newVal.save()
        return newVal
    }

    async getAthleteById(athleteId) {
        return Athlete.findById(athleteId)
    }
}

module.exports = AthleteService