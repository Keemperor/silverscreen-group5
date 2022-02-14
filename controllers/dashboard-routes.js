const router = require("express").Router();
const sequelize = require("../config/connection");
const { Movie, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Movie.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id,
    },
    // attributes: [
    //   "id",
    //   "title",
    //   "post_url",
    //   [sequelize.literal("(SELECT * FROM movie)")],
    // ],
    // include: [
    //   {
    //     model: User,
    //     attributes: ["username"],
    //   },
    // ],
  })
    .then((dbMovieData) => {
      // serialize data before passing to template
      const movies = dbMovieData.map((movie) => movie.get({ plain: true }));
      res.render("dashboard", { movies, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/movies/:id", withAuth, (req, res) => {
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

module.exports = router;
