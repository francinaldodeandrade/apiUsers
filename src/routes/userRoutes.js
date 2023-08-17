import express from "express";
const router = express.Router()

import userControllers from "../controllers/userControllers.js";
import authControllers from "../controllers/authControllers.js";

router.get("/getById/:id", userControllers.getById)
router.get("/getUsers", userControllers.getAll)
router.post("/createUser", userControllers.createUser)
router.put("/updateById/:id", userControllers.updateById)
router.delete("/removeById/:id", userControllers.removeById)

router.post("/login", authControllers.login)

export default router