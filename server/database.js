//  la dépendance PG nous permet de faire lien entre notre serveur applicatif et notre base de données
const { Client } = require('pg');

const client = new Client(process.env.PG_URL);

client.connect();

// exportation de notre client pour l'utiliser dans le dataMapper
module.exports = client;