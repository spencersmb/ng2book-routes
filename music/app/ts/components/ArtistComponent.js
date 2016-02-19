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
var ArtistComponent = (function () {
    function ArtistComponent(spotify, routeParams, locationStrategy) {
        this.spotify = spotify;
        this.routeParams = routeParams;
        this.locationStrategy = locationStrategy;
        this.id = this.routeParams.get('id');
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spotify
            .getArtist(this.id)
            .subscribe(function (res) { return _this.renderArtist(res); });
    };
    ArtistComponent.prototype.renderArtist = function (res) {
        this.artist = res;
        console.log(this.artist);
    };
    ArtistComponent.prototype.back = function () {
        this.locationStrategy.back();
    };
    ArtistComponent = __decorate([
        core_1.Component({
            selector: 'artist',
            directives: [common_1.CORE_DIRECTIVES],
            template: "\n      <div *ngIf=\"artist\">\n        <h1>{{ artist.name }}</h1>\n\n        <p>\n          <img src=\"{{ artist.images[0].url }}\">\n        </p>\n\n        <p><a href (click)=\"back()\">Back</a></p>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [spotifyService_1.SpotifyService, router_1.RouteParams, router_1.LocationStrategy])
    ], ArtistComponent);
    return ArtistComponent;
})();
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=ArtistComponent.js.map