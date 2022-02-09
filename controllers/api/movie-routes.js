const router = require("express").Router();
const { Movie, User } = require("../../models");
// const withAuth = require("../../utils/auth");

// get all movies
router.get("/", (req, res) => {
  console.log("======================");
  Movie.findAll({
    attributes: ["id", "tile", "post_url", "release"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ]
      .then((dbMovieData) => {
        const movies = dbMovieData.map((movie) => movie.get({ plain: true }));

        res.render("homepage", {
          movies,
          loggedIn: req.session.loggedIn,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      }),
  });
});

router.get("/:id", (req, res) => {
  Movie.findOne({
    // attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
      // {
      //   model: Vote,
      //   attributes: ["id", "comment_text", "movie_id"],
      //   include: {
      //     model: User,
      //     attributes: ["user_id"],
      //   },
      // },
      // {
      //   model: Post,
      //   attributes: ["title"],
      //   through: Vote,
      //   as: "voted_posts",
      // },
    ],
  })
    .then((dbMovieData) => {
      if (!dbMovieData) {
        res.status(404).json({ message: "No movie found with this id" });
        return;
      }
      res.json(dbMovieData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
