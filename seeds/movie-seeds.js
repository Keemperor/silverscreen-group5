const { Movie } = require("../models");
const seedMovies = () => Movie.bulkCreate(dbMovieData);

const dbMovieData = [
  {
    title: "Juice",
    post_url: "https://www.imdb.com/title/tt0104573/?ref_=fn_al_tt_1",
    // release: 1992,
  },

  {
    title: "Inception",
    post_url: "https://www.imdb.com/title/tt1375666/?ref_=fn_al_tt_1",
    // release: 2010,
  },

  {
    title: "Home Alone 2: Lost in New York",
    post_url: "https://www.imdb.com/title/tt0104431/?ref_=fn_al_tt_1",
    // release: 1992,
  },

  {
    title: "Hidden Figures",
    post_url: "https://www.imdb.com/title/tt4846340/?ref_=nv_sr_srsg_0",
    // release: 2010,
  },
  {
    title: "Jumanji",
    post_url: "https://www.imdb.com/title/tt0113497/?ref_=nv_sr_srsg_7",
    // release: 1995,
  },
  {
    title: "The Wolf of Wall Street",
    post_url: "https://www.imdb.com/title/tt0993846/?ref_=nv_sr_srsg_0",
    // release: 2013,
  },
  {
    title: "Superbad",
    post_url: "https://www.imdb.com/title/tt0829482/?ref_=nv_sr_srsg_0",
    // release: 2007,
  },
  {
    title: "Independence Day",
    post_url: "https://www.imdb.com/name/nm0000226/?ref_=nv_sr_srsg_0",
    // release: 1996,
  },
  {
    title: "Training Day",
    post_url: "https://www.imdb.com/title/tt0139654/?ref_=nm_knf_t4",
    // release: 2001,
  },
  {
    title: "This Is 40",
    post_url: "https://www.imdb.com/title/tt1758830/?ref_=nv_sr_srsg_0",
    // release: 2012,
  },
];

module.exports = seedMovies;
