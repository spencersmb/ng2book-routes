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
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var SearchComponent_1 = require("./components/SearchComponent");
var spotifyService_1 = require("./services/spotifyService");
var TrackComponent_1 = require("./components/TrackComponent");
var ArtistComponent_1 = require("./components/ArtistComponent");
var AlbumComponent_1 = require("./components/AlbumComponent");
require('css/styles.scss');
var RoutesDemoApp = (function () {
    function RoutesDemoApp(router) {
        this.router = router;
    }
    RoutesDemoApp = __decorate([
        core_1.Component({
            selector: 'router-app',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [spotifyService_1.SpotifyService],
            template: "\n  <router-outlet></router-outlet>\n  "
        }),
        router_1.RouteConfig([
            { path: "/", name: "root", redirectTo: ['Search'] },
            { path: "/search", name: "Search", component: SearchComponent_1.SearchComponent },
            { path: "/track", name: "Tracks", component: TrackComponent_1.TrackComponent },
            { path: "/artist", name: "Artists", component: ArtistComponent_1.ArtistComponent },
            { path: "/album", name: "Albums", component: AlbumComponent_1.AlbumComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], RoutesDemoApp);
    return RoutesDemoApp;
})();
browser_1.bootstrap(RoutesDemoApp, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(router_1.ROUTER_PRIMARY_COMPONENT, { useValue: RoutesDemoApp }),
    core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.js.map