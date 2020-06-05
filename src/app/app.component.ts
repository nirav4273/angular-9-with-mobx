import { Component, OnDestroy, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from 'src/shared/services/loader/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationStart, NavigationEnd  } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy, AfterContentChecked{
	title = 'base';
	private isLoading: boolean = false;
	public isModuleLoading: boolean = true;

	constructor(
		private translate: TranslateService,
		public loader: LoaderService,
		private ref: ChangeDetectorRef,
		private router: Router
	) {
		router.events.subscribe(event => {
		if(event instanceof NavigationStart) {
			this.isModuleLoading = true;
			console.log("event started")
		}else if(event instanceof NavigationEnd) {
			this.isModuleLoading = false;
			console.log("event end")
		}
		// NavigationEnd
		// NavigationCancel
		// NavigationError
		// RoutesRecognized
		});
			// this language will be used as a fallback when a translation isn't found in the current language
			translate.setDefaultLang('en');
			// the lang to use, if the lang isn't available, it will use the current loader to get them
			translate.use('en');
	}

	ngAfterContentChecked(){
		this.ref.detectChanges();
	}

	get loading():boolean {
		return this.isLoading;
	}

	ngOnDestroy(){

	}

}
