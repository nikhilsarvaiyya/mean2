import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
// Imports commented out for brevity
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

// Imports Post Services
import { PostsService } from './posts.service';

// Define the routes
const ROUTES = [
  {
    path: '',
    //redirectTo: 'posts',
    component: PostsComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,

    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  exports: [
  	MdButtonModule, 
  	MdCheckboxModule
  ],
  providers: [PostsService], // Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
