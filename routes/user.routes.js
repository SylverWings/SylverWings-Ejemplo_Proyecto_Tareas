const router = require('express').Router();
const userController = require('../contrellers/UserController');
const isSuperAdmin = require('../middlewares/isSuperAdmin');
const verifyToken = require('../middlewares/verifyToken');


router.get("/users", verifyToken, isSuperAdmin, userController.getAll);
router.get("/users/:id", verifyToken, isSuperAdmin, userController.getUserById);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);

module.exports = router;