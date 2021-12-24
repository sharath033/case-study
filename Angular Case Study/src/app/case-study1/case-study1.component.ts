import { Component, OnInit } from '@angular/core';
import { postData, respData } from './caseDataObj';
import { CaseService } from './Case-Service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-case-study1',
  templateUrl: './case-study1.component.html',
  styleUrls: ['./case-study1.component.css']
})
export class CaseStudy1Component implements OnInit {
  data!: string;
  posData!: postData;
  ResultData!: respData;
  public users:any=[];

  form:any;
  taskid! : number;
  ownerid! : number;
  creatorid! : number;
  taskname! : string;
  description! : string;
  status! : string;
  priority! : string;
  notes! : string;
  isbookmarked! : boolean;
  createdon! : Date;
  statuschangedon! : Date;
  msg: string="Task is created Succesfully!.";

  constructor(private caseService: CaseService) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        TaskId : new FormControl("",Validators.compose([Validators.required])),
        OwnerId : new FormControl(""),
        CreatorId : new FormControl(""),
        TaskName : new FormControl("",Validators.compose([Validators.required, Validators.minLength(3)])),
        Description : new FormControl(""),
        Status : new FormControl(""),
        Priority : new FormControl(""),
        Notes : new FormControl(""),
        IsBookmarked : new FormControl(""),
        CreatedOn : new FormControl(""),
        StatusChangedOn : new FormControl(""),
 
      }
    )}
      onSubmit(user:any)
      {
        console.log(user)
        this.posData = new postData();

        this.posData.taskID = user.TaskId;
        this.posData.ownerID = user.OwnerId;
        this.posData.creatorID = user.CreatorId;
        this.posData.name = user.TaskName;
        this.posData.description = user.Description;
        this.posData.status = user.Status;
        this.posData.priority = user.Priority;
        this.posData.notes = user.Notes;
        this.posData.isBookmarked = user.IsBookmarked;
        this.posData.createdOn = user.CreatedOn;
        this.posData.statusChangedOn = user.StatusChangedOn;
        console.log(this.posData);
        this.caseService.addPost(this.posData).subscribe(
        data=>console.log(data))
      }
  

}

