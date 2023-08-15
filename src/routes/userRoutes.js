import express from "express";
const router = express.Router()

import userControllers from "../controllers/userControllers.js";
import authControllers from "../controllers/authControllers.js";

router.post("/create", userControllers.createUser)
router.post("/login", authControllers.login)

router.get("/getAll", userControllers.getAll)
router.get("/getById/:id", userControllers.getById)
router.put("/updateById/:id", userControllers.updateById)
router.delete("/removeById/:id", userControllers.removeById)

export default router