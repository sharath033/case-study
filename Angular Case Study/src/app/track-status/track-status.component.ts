import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrackInterface } from './TrackInterface';
import { TrackService } from './TrackService';

@Component({
  selector: 'app-track-status',
  templateUrl: './track-status.component.html',
  styleUrls: ['./track-status.component.css']
})
export class TrackStatusComponent implements OnInit {
  public tasks!:TrackInterface[];
  form:any;
  status!:string;
  constructor(private ts : TrackService) { }
  
  ngOnInit(){
  
    this.form=new FormGroup({
    status:new FormControl("",Validators.compose([Validators.required]))
    
    });
    
    }
  
    onSubmit(status1:any) {
    console.log(status1);
    this.ts.Track(status1.status).subscribe(data=>this.tasks=data)
    }

}
