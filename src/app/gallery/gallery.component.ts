
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import {MdCardModule} from '@angular/material';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  // instantiate posts to an empty array
  galleryList: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(galleryList => {
      this.galleryList = galleryList;
    });
  }
}


