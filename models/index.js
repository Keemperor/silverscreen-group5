const User = require("./User");
const Movie = require("./Movie");
// const Vote = require('./Vote');

// create associations
// User.belongsTo(Movie, {
//   foreignKey: "movie_id",
//   onDelete: "cascade",
// });

// Movie.belongsTo(User, {
//   foreignKey: "movie_id",
//   constraints: false,
// });

// User.belongsToMany(Post, {
//   through: Vote,
//   as: 'voted_posts',
//   foreignKey: 'user_id'
// });

// Post.belongsToMany(User, {
//   through: Vote,
//   as: 'voted_posts',
//   foreignKey: 'post_id'
// });

// Vote.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Vote.belongsTo(Post, {
//   foreignKey: 'post_id'
// });

// User.hasMany(Vote, {
//   foreignKey: 'user_id'
// });

// Post.hasMany(Vote, {
//   foreignKey: 'post_id'
// });

module.exports = { User, Movie };
