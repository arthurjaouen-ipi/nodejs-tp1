// Sport routes
module.exports = function(app){
    // Create sport
    app.post('/api/sports', (req,res) => {
        
    })

    // Delete sport
    app.delete('/api/sports/:sportId', (req,res) => {
        
    })

    // Update sport
    app.put('/api/sports/:sportId', (req,res) => {
        
    })

    // All sports
    app.get('/api/sports', (req,res) => {

    })

    // Specific sport
    app.get('/api/sports/:sportId', (req,res) => {

    })

    // All athletes of specific sport
    app.get('/api/sports/:sportId/athletes', (req,res) => {
        
    })

    // Add athlete in sport
    app.post('/api/sports/:sportId/athletes/:athleteId', (req,res) => {
        
    })

    // Remove athlete from sport
    app.delete('/api/sports/:sportId/athletes/:athleteId', (req,res) => {
        
    })
}