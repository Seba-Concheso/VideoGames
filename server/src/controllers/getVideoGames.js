const axios = require("axios");
const { DB_URL, API_KEY } = process.env;
const { Videogames, Genres } = require("../db.js");

const getVideoGames = async () => {
  const response = await axios.get(`https://api.rawg.io/api/games?key=c6e1b66775c945e89dbdd1c2ff530395&page_size=20`);

  const data = response.data.results.map(({ id, name, background_image, genres, rating, platforms, released }) => {
    return {
      id: id,
      name: name,
      image: background_image,
      genres: genres.map((e) => e.name),
      rating: rating,
      platforms: platforms.map((e) => e.platform.name),
      released: released,
    };
  });
  return await Videogames.bulkCreate(data);
};

module.exports = getVideoGames;
