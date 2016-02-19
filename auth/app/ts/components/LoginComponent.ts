import {Component} from "angular2/core";
import {AuthService} from "../services/AuthService";
import {
    Router
} from 'angular2/router';

@Component({
    selector: 'login',
    template:`
    <div class="alert alert-danger" role="alert" *ngIf="message">
    {{ message }}
    </div>

      <form class="form-inline" *ngIf="!authService.getUser()">
        <div class="form-group">
          <label for="username">User:</label>
          <input class="form-control" name="username" #username>
        </div>

        <div class="form-group">
          <label for="password">Password:</label>
          <input class="form-control" type="password" name="password" #password>
        </div>

        <a class="btn btn-default" (click)="login(username.value, password.value)">
          Submit
        </a>
      </form>

      <div class="well" *ngIf="authService.getUser()">
        Logged in as <b>{{ authService.getUser() }}</b>
        <a href (click)="logout()">Log out</a>
      </div>
    `
})

export class LoginComponent{
    message: string;

    constructor(
        public authService: AuthService,
        public router: Router
    ){
        this.message = '';
    }
    login(username: string, password: string): boolean {
        this.message = '';

        //this runs the function and at the same time returns a bool - if the bool is false then a message appears - this returns false so the click event doesnt go anywhere I think
        if(!this.authService.login(username, password)){
            this.message = 'Incorrect credentials';
            /* tslint:disable */
            setTimeout(function() {
                this.message = '';
            }.bind(this), 2500);
            /* tslint:enable */
        }
        return false;
    }
    logout(): boolean {
        this.authService.logout();
        this.router.navigate(['/home']);
        return false;
    }
}