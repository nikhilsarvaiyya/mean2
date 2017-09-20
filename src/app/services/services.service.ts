import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicesService {

	constructor(private http: Http) {}

	addUser(person){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post("/api/addUser", JSON.stringify(person),{headers: headers})
		.map(response => response.json())
		
	}

	getAllUser(){
		return this.http.get('/api/getAllUser')
		.map(res => res.json());
	}




}

