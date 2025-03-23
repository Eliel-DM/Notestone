import { Router } from "express";
import * as controllerNotes from "../controllers/notes-controller";
import * as controllerUsers from "../controllers/users-controller"

const router = Router();

//Routers note

router.get("/notes", controllerNotes.getAllNotes);
router.get("/notes/:id", controllerNotes.getNoteById);
router.delete("/notes/:id", controllerNotes.deleteNoteById);
router.post("/notes", controllerNotes.postNote);
router.patch("/notes/:id", controllerNotes.patchNoteById);

//Routes User

router.get("/login",controllerUsers.getAllUser);
router.get("/login/:id",controllerUsers.getUserById);
router.post("/login", controllerUsers.createUser);

export default router;
