import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/shared/services/auth/auth.service';
import { User } from 'src/shared/models/user';
import { LoaderService } from 'src/shared/services/loader/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

	private users:Array<User> = [];

  constructor(
  	public auth: AuthService,
  	private loader: LoaderService
  ) { }

  ngOnInit(): void {
  	this.getUser();
  }

  getUser(): void {
    this.auth.getUsers();
  }

  get list(): Array<User>{
  	return this.auth.users;
  }

}
