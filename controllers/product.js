const conn = require('../db');

const getModels = async (req , res) => {
    conn.query('SELECT * FROM models', (error, results) => {
        if (error) throw error;
        res.json(results);
        console.log(results);
    });
}

module.exports = {getModels};