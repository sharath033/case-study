import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { loginInterface } from "./User";

@Injectable({ providedIn: 'root' })

export class loginservice {

constructor(private http:HttpClient) { }

login(a:string,b:string):Observable<loginInterface[]>{

return this.http.get<loginInterface[]>("http://localhost:8080/username/"+a+"/pwd/"+b);
}
}