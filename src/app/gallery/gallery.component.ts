
import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services/services.service';
import {MdCardModule} from '@angular/material';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  // instantiate posts to an empty array
  galleryList: any = [];
 gallery = "Gallery Page"
  constructor(private mainService: ServicesService) { }

  ngOnInit() {
    
  }
}


