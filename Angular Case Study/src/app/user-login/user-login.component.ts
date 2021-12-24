import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginInterface } from './User';
import { loginservice } from './user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public users!:loginInterface[];
  form:any;
  username!:string;
  pwd!:string;
  msg:boolean=false;
  constructor(private ts:loginservice, private router: Router) { }
  
  ngOnInit(){
  
  this.form=new FormGroup({
  username:new FormControl(
  "",
  Validators.compose([Validators.required])
  ),
  pwd:new FormControl("",Validators.compose([Validators.required]))
  
  });
  
  }


onSubmit(user1:any) {
  console.log(user1);
  this.ts.login(user1.username,user1.pwd).subscribe(data=>this.users=data)}

  home() {
    if(
      (this.form.username="Paul Stirling")&&(this.form.pwd="Skr@123")
    ){
    alert("logged In Successfull!");
    this.router.navigate(['/Home']);
  }
  else{
    alert("Login not successful! please try with correct keys..");
    this.router.navigate(['/']);
  }
  }
}



