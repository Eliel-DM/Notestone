import { Router } from "express";
import * as controllerNotes from "../controllers/notes-controller";
import * as controllerUsers from "../controllers/users-controller";

const router = Router();

//Routers note

router.get("/user/:usuario_id", controllerNotes.getAllNotesByUser);
router.get("/user/:usuario_id/note/:note_id", controllerNotes.getOneNoteById);
router.delete(
  "/user/:usuario_id/note/:note_id",
  controllerNotes.deleteNoteById
);
router.post("/user/:usuario_id/note/:note_id", controllerNotes.postNote);
router.patch("/user/:usuario_id/note/:note_id", controllerNotes.patchNoteById);

//Routes User

router.get("/login", controllerUsers.getAllUser);
router.get("/login/", controllerUsers.getUserById);
router.post("/login", controllerUsers.createUser);

export default router;
