import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchInterface } from './SearchInterface';
import { SearchService } from './SearchService';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit {
  public task2!:SearchInterface[];
  form:any;
  taskID!:number;
  constructor(private ss : SearchService) { }
  
  ngOnInit(){
  
    this.form=new FormGroup({
    taskID:new FormControl("",Validators.compose([Validators.required]))
    
    });
    
    }
  
    onSubmit(task1:any) {
    console.log(task1);
    this.ss.Search(task1.taskID).subscribe(data=>this.task2=data)
    }
    }

