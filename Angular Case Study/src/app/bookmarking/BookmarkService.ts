import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { BookmarkInterface } from "./BookmarkInterface";

@Injectable({ providedIn: 'root' })

export class BookmarkService {
    constructor(private http:HttpClient) { }
    BookmarkTask(taskID:number,isBookmarked:boolean):Observable<BookmarkInterface[]>{
    return this.http.get<BookmarkInterface[]>("http://localhost:8080/taskid/"+taskID+"/isBookmarked/"+isBookmarked);
    }
}