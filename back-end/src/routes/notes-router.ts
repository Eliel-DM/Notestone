import { Router } from "express";
import * as controller from "../controllers/notes-controller";

const router = Router();

router.get("/notes", controller.getNotes);
router.get("/notes/:id", controller.getNoteById);
router.delete("/notes/:id", controller.deleteNoteById);

export default router;
