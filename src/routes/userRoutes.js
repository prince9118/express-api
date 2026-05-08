import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import validateUser from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/user", createUser);

//  FIX: put dynamic route FIRST
router.get("/user/:id", getUserById);
router.get("/user", getAllUsers);

router.put("/user/:id",validateUser, updateUser);
router.delete("/user/:id", deleteUser);

export default router;