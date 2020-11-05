const Sport = require('../models/sport.model')

class SportService {
    constructor() {}

    async create(sportName) {
        await new Sport({name: sportName, athletes: []}).save()
    }

    async delete(sportId) {
        await Sport.deleteOne()
    }

    async update(sportId, data) {
        await Sport.updateOne({sportId: sportId}, data) 
    }

    async getAllSports() {
        return Sport.find({}).toArray()
    }

    async getSportById(sportId) {
        return Sport.findById(sportId)
    }

    async getAthletesBySportId(sportId) {
        return Sport.findById(sportId).athletes
    }

    async addAthleteToSport(sportId, athleteId) {
        await Sport.updateOne({sportId: sportId}, {$push: {athletes: athleteId}}) 
    }

    async deleteAthleteFromSport(sportId, athleteId) {
        await Sport.updateOne({sportId: sportId}, {$pull: {athletes: athleteId}})
    }

    async getSportByName(sportName) {
        return Sport.findOne({name: sportName})
    }
}

module.exports = SportService