import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookmarkInterface } from './BookmarkInterface';
import { BookmarkService } from './BookmarkService';

@Component({
  selector: 'app-bookmarking',
  templateUrl: './bookmarking.component.html',
  styleUrls: ['./bookmarking.component.css']
})
export class BookmarkingComponent implements OnInit {
  public tasks!:BookmarkInterface[];
  form:any;
  taskID!:number;
  isBookmarked!:boolean;
  

  constructor(private bs : BookmarkService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      taskID:new FormControl("",Validators.compose([Validators.required])),
      isBookmarked:new FormControl("",Validators.compose([Validators.required]))
      
      });
      
  }
  onSubmit(task:any) {
        console.log(task)
        
    this.bs.BookmarkTask(task.taskID,task.isBookmarked).subscribe(data=>this.tasks=data)
    }

}
