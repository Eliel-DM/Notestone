import { StatusCode } from "./http-codes";
import { NoteModel } from "./note-model";

export interface HttpResponse {
  code: StatusCode;
  body: NoteModel[];
}
