const SportService = require('../services/sport.service')
const AthleteService = require('../services/athlete.service')

class SportController {
    constructor() {
        this.sportService = new SportService()
        this.athleteService = new AthleteService()
    }

    // Create sport
    async create(req, res) {
        const exists = await this.sportService.getSportByName(req.body.name)
        if(!exists) {
            await this.sportService.create(req.body.name)
        }
        else {
            console.log('Sport '+req.body.name+' already exists in db.')
        }
    }

    // Delete sport
    async delete(req, res) {
        await this.sportService.delete(req.params.sportId)
        res.end()
    }

    // Update sport
    async update(req, res) {
        const sport = await this.sportService.update(req.params.sportId, req.body)
        res.send(sport)
    }

    // All sports
    async getAllSports(req, res) {
        const sports = await this.sportService.getAllSports()
        res.send(sports)
    }

    // Specific sport
    async getSportById(req, res) {
        const sport = await this.sportService.getSportById(req.params.sportId)
        res.send(sport)
    }

    // All athletes of specific sport
    async getAthletesBySportId(req, res) {
        const sport = await this.sportService.getSportById(req.params.sportId)
        const athletes = await this.athleteService.getAthletesById(sport.athletes)
        res.send(athletes)
    }

    // Add athlete in sport
    async addAthleteToSport(req, res) {
        await this.sportService.addAthleteToSport(req.params.sportId, req.params.athleteId)
        res.end()
    }

    // Remove athlete from sport
    async deleteAthleteFromSport(req, res) {
        await this.sportService.deleteAthleteFromSport(req.params.sportId, req.params.athleteId)
        res.end()
    }
}


module.exports = SportController