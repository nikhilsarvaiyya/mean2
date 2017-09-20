import { Component, OnInit, Inject } from '@angular/core';
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
	
	userObj = {}
	constructor(public http: Http, private service : ServicesService) { }

	ngOnInit() {
		// Retrieve posts from the API
		this.getAllUser();
	}

	saveUser(personDetail){
		this.service.addUser(personDetail)
		.subscribe(data => {
			console.log("success Data", data);
			this.getAllUser();
		})
	}

	getAllUser(){
		this.service.getAllUser().subscribe(userList => {
			console.log(userList)
		});
	}

	uploadImage(){
		console.log("Image Uploaded")
	}

}
