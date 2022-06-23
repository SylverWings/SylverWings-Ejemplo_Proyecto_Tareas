const authController = require("../contrellers/AuthController");
const router = require("express").Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
router.get("./auth/profile", authController.profile);

module.exports = router;