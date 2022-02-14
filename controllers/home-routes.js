const router = require("express").Router();
const sequelize = require("../config/connection");
const { Movie, User } = require("../models");

// test code
// router.get('/', (req, res) => {
//   res.render('homepage', {
//     id: 1,
//     post_url: 'https://handlebarsjs.com/guide/',
//     title: 'Handlebars Docs',
//     created_at: new Date(),
//     vote_count: 10,
//     comments: [{}, {}],
//     user: {
//       username: 'test_user'
//     }
//   });
// });

// router.get("/", (req, res) => {
//   console.log(req.session);
//   Movie.findAll({
//     attributes: ["id", "post_url", "title", "release", "created_at"],
//   })
//     .then((dbMovieData) => {
//       const movies = dbMovieData.map((movie) => movie.get({ plain: true }));
//       console.log(movies);
//       // pass a single post object into the homepage template
//       res.render("dashboard", {
//         movies,
//         loggedIn: req.session.loggedIn,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.get("/", (req, res) => {
  res.render("login");
});

module.exports = router;
