// importation du client qui fait le lien avec notre base de données
const client = require('./database');

const dataMapper = {
    // pour avoir tous les utilisateurs présent dans notre DB
    getAllUsers: (callback) => {
        const newUser = {
            text: `SELECT * FROM "user";`
        }
        //  utilisation de la query avec en argument la requete et la callback défini dans le controleur
        client.query(newUser, callback)
    },

    handleNewUser: (request, callback) => {
        console.log("request", request)
        const newUser = {
            text: `INSERT INTO "user" ("lastname","firstname") VALUES($1, $2 )`,
            // gestion d'un requête préparée pour éviter des injections SQL
            values: [request.firstname, request.lastname]
        }
        client.query(newUser, callback)
    }


}

module.exports = dataMapper;