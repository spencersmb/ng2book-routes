var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var HomeComponent_1 = require("./components/HomeComponent");
var AboutComponent_1 = require("./components/AboutComponent");
var ContactComponent_1 = require("./components/ContactComponent");
require('css/styles.scss');
var RoutesDemoApp = (function () {
    function RoutesDemoApp() {
    }
    RoutesDemoApp = __decorate([
        core_1.Component({
            selector: 'router-app',
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n    <div>\n      <nav>\n        <a>Navigation</a>\n        <ul>\n        <li><a [routerLink]=\"['/Home']\">Home</a></li>\n        <li><a [routerLink]=\"['/About']\">About</a></li>\n        <li><a [routerLink]=\"['/Contact']\">Contact</a></li>\n        </ul>\n      </nav>\n\n      <router-outlet></router-outlet>\n\n    </div>\n    "
        }),
        router_1.RouteConfig([
            { path: '/', name: 'root', redirectTo: ['/Home'] },
            { path: '/home', name: 'Home', component: HomeComponent_1.HomeComponent },
            { path: '/about', name: 'About', component: AboutComponent_1.AboutComponent },
            { path: '/contact', name: 'Contact', component: ContactComponent_1.ContactComponent },
            { path: '/contactus', name: 'ContactUs', redirectTo: ['/Contact'] },
        ]), 
        __metadata('design:paramtypes', [])
    ], RoutesDemoApp);
    return RoutesDemoApp;
})();
exports.RoutesDemoApp = RoutesDemoApp;
browser_1.bootstrap(RoutesDemoApp, [
    router_1.ROUTER_PROVIDERS
]);
