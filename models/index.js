const User = require("./User");
const Movie = require("./Movie");

// create associations
User.belongsTo(Movie, {
  foreignKey: "Movie_id",
  onDelete: "cascade",
});

// Movie.belongsTo(User, {
//   foreignKey: "user_id",
//   // constraints: false,
// });

module.exports = { User, Movie };
