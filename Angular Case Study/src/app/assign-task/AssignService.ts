import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { AssignInterface } from "./AssignInterface";

@Injectable({ providedIn: 'root' })

export class AssignService {
    constructor(private http:HttpClient) { }
    assignTask(taskID:number,userID:number):Observable<AssignInterface[]>{
    return this.http.get<AssignInterface[]>("http://localhost:8080/taskid/"+taskID+"/userid/"+userID);
    }
}