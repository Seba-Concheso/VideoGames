//creo conexion a la base de datos
//defino modelos
//defino relaciones
//exporto modelos
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
//importo el dotenv

//importo los modelos
const GenreModel = require("./models/Genres");
const VideogameModel = require("./models/Videogames");

//creo const para los datos de la BBDD
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, //sirve para que no me muestre todos los datos del sync en consola.
  native: false,
});
VideogameModel(sequelize);
GenreModel(sequelize);

// const { Videogames, Genres } = sequelize.models;
console.log(VideogameModel);
console.log(GenreModel);

const { Videogames, Genres } = sequelize.models;
console.log(Videogames);
console.log(Genres);

// // Aca vendrian las relaciones
// Videogames.belongsToMany(Genres, { through: "videogames_genres" });
// Genres.belongsToMany(Videogames, { through: "videogames_genres" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para exportar la conexión a la base de datos
};
