import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {MdButtonModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	userObj = {}
	constructor(public http: Http) { }

	ngOnInit() {

	}

	saveUser(personDetail){
		console.log(personDetail)
		
	}

}
