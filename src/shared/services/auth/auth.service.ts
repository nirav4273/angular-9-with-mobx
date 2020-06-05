import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { LoaderService } from '../loader/loader.service';
import { UserService } from '../user/user.service';
import { StorageService } from '../storage/storage.service';
import { observable, computed, action } from 'mobx';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

	@observable users: Array<any> = [];

	constructor(
		private http: HttpService,
		private loader: LoaderService,
		private userService: UserService,
		private storage: StorageService,
		private router: Router
	) { }

	login(body: any){
		this.loader.setLoader(true);
		this.http.post(`login`, body).subscribe((res:any) => {
			this.userService.setLoggedIn();
			this.storage.set("user", JSON.stringify(res));
			this.router.navigateByUrl("/");
			this.loader.setLoader(false);
		}, err => {
			this.loader.setLoader(false);
			console.log(err);
			alert(err.error);
		});
	}

	@action
	setUsers(data) {
		this.users = data;
	}

	getUsers() {
		this.loader.setLoader(true);
		this.http.get('users').subscribe((res:any) => {
			this.setUsers(res.data);
			this.loader.setLoader(false);
		}, err => {
			this.loader.setLoader(false);
			console.log(err);
		});
	}
}
