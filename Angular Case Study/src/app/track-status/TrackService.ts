import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { TrackInterface } from "./TrackInterface";
@Injectable({ providedIn: 'root' })

export class TrackService {

constructor(private http:HttpClient) { }

Track(status:string):Observable<TrackInterface[]>{

return this.http.get<TrackInterface[]>("http://localhost:8080/status/"+status);
}
}