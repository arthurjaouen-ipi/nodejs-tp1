const mongoose = require('mongoose')

const password = '';
const cluster = '';

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://admin:rRc85A9fwtwX8vqb@cluster0.bpwvs.mongodb.net/Jeux_Olympiques?retryWrites=true&w=majority', { useNewUrlParser: true });
    } catch (err) {
        console.error('Couldn\'t establish connection with database.', err);
        throw err;
    }

    console.info('Connection with the database established');
}

module.exports = connect;