import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from './case-study.service';
import { ITask } from "./task";

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit {
  public tasks!:ITask[];

  constructor(private taskService:TaskServiceService){}

  ngOnInit(){
    this.taskService.getTasks()
    .subscribe(data => this.tasks =data)
  }

  }