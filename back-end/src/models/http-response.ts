import { StatusCode } from "../utils/http-codes";
import { NoteModel } from "./notes-model";

export interface HttpResponse {
  code: StatusCode;
  content: NoteModel[] | NoteModel | null;
}
