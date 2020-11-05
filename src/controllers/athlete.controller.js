const AthleteService = require('../services/athlete.service')

class AthleteController {
    constructor() {
        this.athleteService = new AthleteService()
    }

    // Create athlete
    async create(req, res) {

        const newAthlete = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            country: req.body.country 
        };

        console.log(req.body);
        console.log(newAthlete);
        // TODO vérification de l'existence d'athlete

        const newVal = await this.athleteService.create(newAthlete)
        res.send(newVal)
    }

    // Delete athlete
    async delete(req, res) {
        
    }

    // Update athlete
    async update(req, res) {
        
    }

    // All athletes
    async getAllAthletes(req, res) {
        
    }

    // Specific athlete
    async getAthleteById(req, res) {
        
    }

    // All sports of specific athlete
    async getSportsByAthleteId(req, res) {
        
    }

    // All athletes of specific country
    async getAthletesByCountry(req, res) {
        
    }
}


module.exports = AthleteController