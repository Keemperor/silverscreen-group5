const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes')
const commentRoutes = require('./comment-routes');
const MovieRoutes = require('./movie-routes');

router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/movies', MovieRoutes);

module.exports = router;