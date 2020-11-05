const mongoose = require('mongoose')

const password = '';
const cluster = '';

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://admin:'+password+'@'+cluster, { useNewUrlParser: true });
    } catch (err) {
        console.error('Couldn\'t establish connection with database.', err);
        throw err;
    }

    console.info('Connection with the database established');
}

module.exports = connect;