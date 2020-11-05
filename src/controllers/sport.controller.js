const SportService = require('../services/sport.service')
const AthleteService = require('../services/athlete.service')

class SportController {
    constructor() {
        this.sportService = new SportService()
        this.athleteService = new AthleteService()
    }

    // Create sport
    async create(req, res) {
        const exists = this.sportService.getSportByName(req.body.name)

        if(!exists) {
            await this.sportService.create(req.body.name)
            res.status(200)
        }
        else {
            console.log('Sport already exists in db.')
            res.status(500).end()
        }
    }

    // Delete sport
    async delete(req, res) {
        await this.sportService.delete(req.params.sportId)
        res.status(200)
    }

    // Update sport
    async update(req, res) {
        const sport = await this.sportService.update(req.params.sportId, req.body)
        res.status(200)
    }

    // All sports
    async getAllSports(req, res) {
        const sports = await this.sportService.getAllSports()
        res.status(200).send(sports)
    }

    // Specific sport
    async getSportById(req, res) {
        const sport = await this.sportService.getSportById(req.params.sportId)
        res.status(200).send(sport)
    }

    // All athletes of specific sport
    async getAthletesBySportId(req, res) {
        const athletesId = await this.sportService.getAthletesBySportId(req.params.sportId)
        const athletes = await this.athleteService.getAthletesById(athletesId)
        res.status(200).send(athletes)
    }

    // Add athlete in sport
    async addAthleteToSport(req, res) {
        await this.sportService.addAthleteToSport(req.params.sportId, req.params.athleteId)
        res.status(200)
    }

    // Remove athlete from sport
    async deleteAthleteFromSport(req, res) {
        await this.sportService.deleteAthleteFromSport(req.params.sportId, req.params.athleteId)
        res.status(200)
    }
}


module.exports = SportController