import { Injectable } from '@angular/core';
import { observable } from 'mobx';

@Injectable({
  providedIn: 'root'
})

export class LoaderService {

	@observable loader = false;
  
	constructor() { }

	setLoader(flag: boolean){
		this.loader = flag;
	}
	
	get loading() {
		return this.loader;
	}
}
