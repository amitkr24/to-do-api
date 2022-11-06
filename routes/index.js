const express = require("express");
const router = express.Router();

const userController = require("../controllers/user_controllers"); // doctor controller added
const jwt = require("jsonwebtoken"); //jwt web token added
const passport = require("passport"); // passort added
// show this message in home url
console.log("router added");
router.get("/", function (req, res) {
  return res.json(400, {
    message: "Please request the correct routes!",
  });
});

//login routes
router.get("/signin", userController.login);

//create task route
router.post(
  "/create-todo",
  passport.authenticate("jwt", { session: false }),
  userController.createTodo
);

//update task route
router.patch(
  "/update-todo/:id",
  passport.authenticate("jwt", { session: false }),
  userController.taskUpdate
);

//list task
router.get(
  "/todo",
  passport.authenticate("jwt", { session: false }),
  userController.todoList
);

//delete task
router.delete(
  "/todo/:id",
  passport.authenticate("jwt", { session: false }),
  userController.deleteTask
);
module.exports = router;
