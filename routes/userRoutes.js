import {Router} from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({title: "Get all Users   "});
});
userRouter.get("/:id", (req, res) => {
  res.send({title: `Get User with ID: ${req.params.id}`});
});
userRouter.post("/", (req, res) => {
  res.send({title: "Create User"});
});
userRouter.delete("/:id", (req, res) => {
  res.send({title: `Delete User with ID: ${req.params.id}`});
});
userRouter.put("/:id", (req, res) => {
  res.send({title: `Update User with ID: ${req.params.id}`});
});

export default userRouter;