const Sport = require('../models/sport.model')

class SportService {
    constructor() {}

    async create(sportName) {
        await new Sport({name: sportName, athletes: []}).save()
    }

    async delete(sportId) {
        await Sport.deleteOne({'_id': sportId})
    }

    async update(sportId, data) {
        await Sport.updateOne({'_id': sportId}, data) 
    }

    async getAllSports() {
        return Sport.find({})
    }

    async getSportById(sportId) {
        return Sport.findById(sportId)
    }

    async addAthleteToSport(sportId, athleteId) {
        await Sport.updateOne({'_id': sportId}, {$push: {athletes: athleteId}}) 
    }

    async deleteAthleteFromSport(sportId, athleteId) {
        if(sportId)
            await Sport.updateOne({'_id': sportId}, {$pull: {athletes: athleteId}})
        else
            await Sport.updateMany({},{$pull: {athletes: athleteId}})
    }

    async getSportByName(sportName) {
        return Sport.findOne({name: sportName})
    }

    async getSportsOfAthlete(athleteId) {
        return Sport.find({ athletes: athleteId })
    }
}

module.exports = SportService