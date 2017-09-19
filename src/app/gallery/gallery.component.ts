
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

  constructor(private mainService: ServicesService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.mainService.getAllPosts().subscribe(galleryList => {
      this.galleryList = galleryList;
    });
  }
}


