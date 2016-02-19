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
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var spotifyService_1 = require("../services/spotifyService");
var AlbumComponent = (function () {
    function AlbumComponent(spotify, routeParams, locationStrategy) {
        this.spotify = spotify;
        this.routeParams = routeParams;
        this.locationStrategy = locationStrategy;
        this.id = this.routeParams.get('id');
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spotify
            .getAlbum(this.id)
            .subscribe(function (res) { return _this.renderTrack(res); });
    };
    AlbumComponent.prototype.renderTrack = function (res) {
        this.album = res;
    };
    AlbumComponent.prototype.back = function () {
        this.locationStrategy.back();
    };
    AlbumComponent = __decorate([
        core_1.Component({
            selector: 'album',
            directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
            template: "\n    <div *ngIf=\"album\">\n        <h1>{{ album.name }}</h1>\n        <h2>{{ album.artists[0].name }}</h2>\n    \n        <p>\n          <img src=\"{{ album.images[1].url }}\">\n        </p>\n    \n        <h3>Tracks</h3>\n        <ol>\n          <li *ngFor=\"#t of album.tracks.items\">\n            <a [routerLink]=\"['/Tracks', {id: t.id}]\">\n              {{ t.name }}\n            </a>\n          </li>\n        </ol>\n    \n        <p><a href (click)=\"back()\">Back</a></p>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [spotifyService_1.SpotifyService, router_1.RouteParams, router_1.LocationStrategy])
    ], AlbumComponent);
    return AlbumComponent;
})();
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=AlbumComponent.js.map