import { Router } from "express";
import { createUsers, getUsers } from "../controllers/userControllers";

const router = Router();

router.get("/", getUsers);
router.post("/", createUsers);

export default router;