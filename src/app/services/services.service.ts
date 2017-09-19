import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicesService {

	constructor(private http: Http) {}

	getAllPosts() {
		return this.http.get('/api/posts')
		.map(res => res.json());
	}


}

