import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
/*
import { UserLoginComponent } from './user-login/user-login.component';

import { UpdatePriorityComponent } from './update-priority/update-priority.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { BookmarkingComponent } from './bookmarking/bookmarking.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { TrackStatusComponent } from './track-status/track-status.component';
*/
import { routingComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    

  
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }