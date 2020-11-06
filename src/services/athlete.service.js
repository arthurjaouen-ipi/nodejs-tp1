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

    async verifExiste(athlete){
        return await Athlete.findOne({
            firstName: athlete.firstName,
            lastName: athlete.lastName,
            gender: athlete.gender,
            country: athlete.country
        });
    }

    async delete(athleteId){
        await Athlete.deleteOne({'_id': athleteId})
    }

    async update(athleteId, data){
        await Athlete.updateOne({'_id': athleteId}, data) 
    }

    async getAllAthletes(){
        return await Athlete.find({})
    }

    async getAthleteById(athleteId){
        return await Athlete.findById(athleteId)
    }

    async getAthletesById(athleteId){
        return await Athlete.find({"_id": athleteId})
    }

    async getSportsByAthleteId(athleteId){
        return await Athlete.find({'_id': athleteId})
    }

    async getAthletesByCountry(countryName){
        return await Athlete.find({country: countryName})
    }
}

module.exports = AthleteService