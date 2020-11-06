const AthleteService = require('../services/athlete.service')
const SportService = require('../services/sport.service')

class AthleteController {
    constructor() {
        this.athleteService = new AthleteService()
        this.sportService = new SportService()
    }

    // Create athlete
    async create(req, res) {
        const exists = await this.athleteService.verifExiste(req.body)
        if(!exists) {
            const newAthlete = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                country: req.body.country 
            };

            const newVal = await this.athleteService.create(newAthlete)
        } 
        else {
            console.log('Athlete already exists in db.')
            res.status(500).end()
        }
    }

    // Delete athlete
    async delete(req, res) {
        await this.athleteService.delete(req.params.athleteId)
        res.status(200).end()
    }

    // Update athlete
    async update(req, res) {
        const athletes = await this.athleteService.update(req.params.athleteId, req.body)
        res.status(200).end(athletes)
    }

    // All athletes
    async getAllAthletes(req, res) {
        const athletes = await this.athleteService.getAllAthletes()
        res.status(200).send(athletes)
    }

    // Specific athlete
    async getAthleteById(req, res) {
        const athletes = await this.athleteService.getAthleteById()
        res.status(200).send(athletes)
    }

    // All sports of specific athlete
    async getSportsByAthleteId(req, res) {
        const sports = await this.sportService.getSportsOfAthlete(req.params.athleteId)
        res.status(200).send(sports)
    }

    // All athletes of specific country
    async getAthletesByCountry(req, res) {
        const athletes = await this.athleteService.getAthletesByCountry(req.params.country)
        res.status(200).send(athletes)
    }
}


module.exports = AthleteController