import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { postData, respData } from './caseDataObj';

@Injectable({
    providedIn: 'root'
})

export class CaseService{

    postUrl: string = "http://localhost:8080/createTask";
    httpOptions = {
       headers: new HttpHeaders({
         'ContentType': 'application/json', 'Authorization': 'my-auth-token'
        })

    };
    constructor(private httpClient : HttpClient){ }

    addPost (postD: postData) {
        return this.httpClient.post(this.postUrl, postD);
        //, this.httpOptions
        
    }
}