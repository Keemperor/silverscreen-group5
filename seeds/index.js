const seedUsers = require("./user-seeds");
const seedMovies = require("./movie-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  await seedMovies();
  console.log("--------------");

  process.exit(0);
};

seedAll();
