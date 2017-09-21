import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicesService {

	constructor(private http: Http) {}

	addUser(person){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post("/api/users", person ,{headers: headers})
		.map(response => response.json())
		
	}

	getAllUser(){
		return this.http.get('/api/users')
		.map(res => res.json());
	}

	addImage(imgObj){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/images', imgObj, {headers: headers})
		.map(response => response.json())
	}

	getAllImages(){
		return this.http.get('/api/images')
		.map(res => res.json());
	}


}

