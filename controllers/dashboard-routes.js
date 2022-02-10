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
    attributes: [
      "id",
      "title",
      "post_url",
      [sequelize.literal("(SELECT * FROM movie)")],
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
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

module.exports = router;
