const router = require("express").Router();
const sequelize = require("../config/connection");
const { Movie, User } = require("../models");

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
