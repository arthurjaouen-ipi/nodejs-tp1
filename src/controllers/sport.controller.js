const SportService = require('../services/sport.service')

class SportController {
    constructor() {
        this.sportService = new SportService()
    }

    // Create sport
    async create(req, res) {
        
    }

    // Delete sport
    async delete(req, res) {
        
    }

    // Update sport
    async update(req, res) {
        
    }

    // All sports
    async getAllSports(req, res) {
        
    }

    // Specific sport
    async getSportById(req, res) {
        
    }

    // All athletes of specific sport
    async getAthletesBySportId(req, res) {
        
    }

    // Add athlete in sport
    async addAthleteBySportId(req, res) {
        
    }

    // Remove athlete from sport
    async deleteAthleteBySportId(req, res) {
        
    }
}


module.exports = SportController