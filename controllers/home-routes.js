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

router.get("/movies/:id", (req, res) => {
  Movie.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "release", "created_at"],
  })
    .then((dbMovieData) => {
      if (!dbMovieData) {
        res.status(404).json({ message: "No movie found with this id" });
        return;
      }

      // serialize the data
      const movie = dbMovieData.get({ plain: true });

      // pass data to template
      res.render("single-post", {
        movie,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
