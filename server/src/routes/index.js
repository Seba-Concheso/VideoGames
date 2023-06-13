const { Router } = require("express");
const getVideoGames = require("../controllers/getVideoGames");

// Configurar los routers

const routerMain = Router();
//********************************************Obtener video juegos de la API */

routerMain.get("/videogames", async (_req, res) => {
  try {
    const videogames = await getVideoGames();

    res.status(200).json(videogames);
  } catch (error) {
    res.status(500).json({ error: "error al obtener datos." });
  }
});
module.exports = routerMain;
