/*
 * Angular
 */
import {Component, Injector} from 'angular2/core';
import {CanActivate} from 'angular2/router';
import {AuthService} from "../services/AuthService";

/*
 * Services
 */

@CanActivate(
    //nextRoute, CurrentRoute instructions
    (nextInstr: any, currInstr: any) => {
      //We’re first asking the Injector class to give us a concrete injector that is aware of only once class: AuthService.
      let injector: any = Injector.resolveAndCreate([AuthService]);

      //Next, we’re asking this injector to give us an instance of that class.
      let authService: AuthService = injector.get(AuthService);

      console.log('nextInstr', nextInstr);
      console.log('currInstr', currInstr);
      return authService.isLogged();
    }

)

@Component({
  selector: 'protected',
  template: `<h1>Protected content</h1>`
})

export class ProtectedComponent {
}
