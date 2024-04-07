const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/auth/signup', userController.registration);
router.post('/auth/signin', userController.login);
router.post('/auth/logout', userController.logout);
router.post('/auth/validate', userController.validate);
router.get('/auth/activate/:link', userController.activate);
router.get('/auth/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

module.exports = router;
