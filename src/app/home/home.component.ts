import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {MdButtonModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

import { ServicesService } from '../services/services.service'
//import { User }    from '../model/user';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	@ViewChild('fileInput') fileInput;
	userObj = {}
	imgObj={}
	imgBaseObj : any;
	imagebase64: any;
	constructor(public http: Http, private service : ServicesService) { }

	ngOnInit() {
		this.getAllUser();
		this.getAllImages();
	}

	saveUser(personDetail){
		this.service.addUser(personDetail)
		.subscribe(data => {
			//console.log("success Data", data);
			this.getAllUser();
		})
	}

	getAllUser(){
		this.service.getAllUser().subscribe(userList => {
			//console.log(userList)
		});
	}

	
	uploadImage() {
		let fileBrowser = this.fileInput.nativeElement;
		if (fileBrowser.files && fileBrowser.files[0]) {
			const formData = new FormData();
			formData.append("image", fileBrowser.files[0].name);

			let imgObj = {
				"imageName" : fileBrowser.files[0].name,
				"imagebase64" : this.imagebase64,
				"size" : fileBrowser.files[0].size,
				"type" : fileBrowser.files[0].type,
				"lastModified" : fileBrowser.files[0].lastModifiedDate,
				"date" : new Date()
			}
			this.service.addImage(imgObj)
			.subscribe(data => {
				//console.log("Image Reply", data);
			})
		}
	}

	changeListener($event) : void {
		this.readThis($event.target);
	}

	readThis(inputValue: any): void {
		var file:File = inputValue.files[0];
		var myReader:FileReader = new FileReader();

		myReader.onloadend = (e) => {
			this.imagebase64 = myReader.result;
			//console.log(e.target);
		}
		myReader.readAsDataURL(file);
	}

	getAllImages(){
		this.service.getAllImages().subscribe(ImageList => {
			//console.log(ImageList)
			this.getAllImages();
		});
	}


/*uploadImage(){
		console.log("Image Uploaded");

		this.service.addImage()
		.subscribe(data => {
			console.log("Image Reply", data);
			this.getAllUser();
		})

	}*/

}
