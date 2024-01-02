const { store } = require("../controllers/userController");

const userRouter = require("express").Router();

userRouter.post("/inscription", store);

module.exports = userRouter;
