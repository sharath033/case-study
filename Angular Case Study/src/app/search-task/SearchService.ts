import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { SearchInterface } from "./SearchInterface";
@Injectable({ providedIn: 'root' })

export class SearchService {

constructor(private http:HttpClient) { }

Search(taskID:number):Observable<SearchInterface[]>{

return this.http.get<SearchInterface[]>("http://localhost:8080/taskid/"+taskID);
}
}