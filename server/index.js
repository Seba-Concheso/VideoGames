const app = require("./src/app");
const { conn } = require("./src/db.js");
//Responsabilidad de levantar el servidor

const PORT = 3001;

app.listen(PORT, () => {
  conn.sync({ force: true }).then(() => {
    console.log(`Server is running...${PORT}`);
  });
});
