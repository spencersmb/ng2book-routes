/*
 * Angular
 */
import {provide, Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  HashLocationStrategy,
  LocationStrategy,
  Router,
  RouteConfig,
} from 'angular2/router';

/*
 * Components
 */
import {HomeComponent} from './components/HomeComponent';
import {AboutComponent} from './components/AboutComponent';
import {ContactComponent} from './components/ContactComponent';
import {ProtectedComponent} from './components/ProtectedComponent';
import {LoginComponent} from "./components/LoginComponent";

/*
 * Services
 */
import {AUTH_PROVIDERS} from './services/AuthService';
import {AuthService} from "./services/AuthService";

/*
 * Webpack
 */
require('css/styles.scss');

@Component({
  selector: 'router-app',
  directives: [ROUTER_DIRECTIVES, LoginComponent],
  providers:[AuthService],
  template: `
  <div class="page-header">
    <div class="container">
      <h1>Router Sample</h1>
      <div class="navLinks">
        <a [routerLink]="['/Home']">Home</a>
        <a [routerLink]="['/About']">About</a>
        <a [routerLink]="['/Contact']">Contact us</a>
        <a [routerLink]="['/Protected']">Protected</a>
      </div>
    </div>
  </div>

  <div id="content">
    <div class="container">

      <login></login>

      <hr>

      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
@RouteConfig([
  { path: '/',          name: 'root',      redirectTo: ['Home'] },
  { path: '/home',      name: 'Home',      component: HomeComponent },
  { path: '/about',     name: 'About',     component: AboutComponent },
  { path: '/contact',   name: 'Contact',   component: ContactComponent },
  { path: '/protected', name: 'Protected', component: ProtectedComponent },
])
class RoutesDemoApp {
  constructor() {
  }
}

bootstrap(RoutesDemoApp, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
