import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { NoteInterface } from "./NoteInterface";

@Injectable({ providedIn: 'root' })

export class NoteService {
    constructor(private http:HttpClient) { }
    addNote(taskID:number,notes:string):Observable<NoteInterface[]>{
    return this.http.get<NoteInterface[]>("http://localhost:8080/taskid/"+taskID+"/notes/"+notes);
    }
}