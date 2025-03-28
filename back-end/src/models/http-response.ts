import { StatusCode } from "../utils/http-codes";
import { NoteModel } from "./note-model";

export interface HttpResponse {
  code: StatusCode;
  content: NoteModel[] | NoteModel | null;
}
