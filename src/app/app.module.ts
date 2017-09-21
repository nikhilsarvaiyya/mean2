import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
// Imports Material Components
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
// Imports commented out for brevity
import { RouterModule } from '@angular/router';
// Imports  Services
import { ServicesService } from './services/services.service';
// Imports Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    //redirectTo: 'gallery',
    component: HomeComponent,
    //pathMatch: 'full'
  },
  {
    path: 'gallery',
    component: GalleryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent
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
  providers: [ServicesService], // Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
