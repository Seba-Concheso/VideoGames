// //creo conexion a la base de datos
// //defino modelos
// //defino relaciones
// //exporto modelos
// const { Sequelize } = require("sequelize");
// const dotenv = require("dotenv");
// dotenv.config();
// //importo el dotenv

// //importo los modelos
// const GenreModel = require("./models/Genres");
// const VideogameModel = require("./models/Videogames");

// //creo const para los datos de la BBDD
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
//   logging: false, //sirve para que no me muestre todos los datos del sync en consola.
//   native: false,
// });
// VideogameModel(sequelize);
// GenreModel(sequelize);

// // const { Videogames, Genres } = sequelize.models;
// console.log(VideogameModel);
// console.log(GenreModel);

// const { Videogames, Genres } = sequelize.models;
// console.log(Videogames);
// console.log(Genres);

// // // Aca vendrian las relaciones
// // Videogames.belongsToMany(Genres, { through: "videogames_genres" });
// // Genres.belongsToMany(Videogames, { through: "videogames_genres" });

// module.exports = {
//   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
//   conn: sequelize, // para exportar la conexión a la base de datos
// };

require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const GenreModel = require("./models/Genres");
const VideogameModel = require("./models/Videogames");

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
VideogameModel(sequelize);
GenreModel(sequelize);
const { Videogames, Genres } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Videogames.belongsToMany(Genres, { through: "videogames_genres" });
Genres.belongsToMany(Videogames, { through: "videogames_genres" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
