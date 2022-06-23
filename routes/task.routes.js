const router = require("express").Router();
const taskController = require("../contrellers/TaskController");

router.get("/tasks", taskController.getAll);
router.post("/tasks", taskController.create);
router.put("/tasks/:id", taskController.update);
router.delete("/tasks/:id", taskController.delete);

module.exports = router;