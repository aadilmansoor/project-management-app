import { Router } from "express";
import { createUsers, getUser, getUsers } from "../controllers/userControllers";

const router = Router();

router.get("/", getUsers);
router.post("/", createUsers);
router.get("/:cognitoId", getUser);

export default router;