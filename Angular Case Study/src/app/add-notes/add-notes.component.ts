import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteInterface } from './NoteInterface';
import { NoteService } from './NoteService'

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {
  public tasks!:NoteInterface[];
  form:any;
  taskID!:number;
  notes!:string;
  

  constructor(private ns : NoteService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      taskID:new FormControl("",Validators.compose([Validators.required])),
      notes:new FormControl("",Validators.compose([Validators.required]))
      
      });
      
  }
  onSubmit(task:any) {
        console.log(task)
        
    this.ns.addNote(task.taskID,task.notes).subscribe(data=>this.tasks=data)
    }

}
