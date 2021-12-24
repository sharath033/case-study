import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssignInterface } from './AssignInterface';

import { AssignService } from './AssignService';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {
  public tasks!:AssignInterface[];
  form:any;
  taskID!:number;
  userID!:number;
  

  constructor(private as : AssignService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      taskID:new FormControl("",Validators.compose([Validators.required])),
      userID:new FormControl("",Validators.compose([Validators.required]))
      
      });
      
  }
  onSubmit(task:any) {
        console.log(task)
        
    this.as.assignTask(task.taskID,task.userID).subscribe(data=>this.tasks=data)
    }
  }
