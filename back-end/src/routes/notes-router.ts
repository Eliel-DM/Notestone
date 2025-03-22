import { Router } from "express";
import * as controller from "../controllers/notes-controller";

const router = Router();

router.get("/notes", controller.getNotes);
router.get("/notes/:id", controller.getNoteById);
router.delete("/notes/:id", controller.deleteNoteById);
router.post("/notes", controller.postNote);
router.patch("/notes/:id", controller.patchNoteById);

export default router;
