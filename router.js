const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const CategoryRouter = require('./views/CategoryRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/api', UserRouter); //Login and register routes
router.use('/movies', MovieRouter); //add auth
router.use('/categories',CategoryRouter);

module.exports = router;