
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { BookmarkingComponent } from './bookmarking/bookmarking.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { CaseStudy1Component } from './case-study1/case-study1.component';

import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { TrackStatusComponent } from './track-status/track-status.component';
import { UpdatePriorityComponent } from './update-priority/update-priority.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  
  { path : 'GetTasks', component: CaseStudyComponent},
  { path : 'CreateTask', component: CaseStudy1Component},
  { path : 'AssignTask', component: AssignTaskComponent},
  { path : 'AddNotes', component: AddNotesComponent},
  { path : 'Bookmarking', component:BookmarkingComponent},
  { path : 'UpdatePriority', component:UpdatePriorityComponent},
  {path : 'Trackbystatus', component:TrackStatusComponent},
  { path : 'SearchTask', component:SearchTaskComponent},
  { path : 'DeleteTask', component:DeleteTaskComponent},
  { path: '', component:UserLoginComponent},
  { path : 'Home', component:LoginSuccessComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginSuccessComponent,TrackStatusComponent,DeleteTaskComponent,UserLoginComponent,CaseStudyComponent,CaseStudy1Component,AssignTaskComponent,AddNotesComponent,BookmarkingComponent,UpdatePriorityComponent,SearchTaskComponent]