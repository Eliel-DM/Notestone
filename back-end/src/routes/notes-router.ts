import { Router } from "express";
import * as controller from "../controllers/notes-controller";

const router = Router();

router.get("/", controller.getNotes);

export default router;