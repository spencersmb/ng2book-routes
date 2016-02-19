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
var router_1 = require('angular2/router');
var spotifyService_1 = require("../services/spotifyService");
var TrackComponent = (function () {
    function TrackComponent(routeParams, spotify, locationStrategy) {
        this.routeParams = routeParams;
        this.spotify = spotify;
        this.locationStrategy = locationStrategy;
        this.id = this.routeParams.get('id');
    }
    TrackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spotify
            .getTrack(this.id)
            .subscribe(function (res) { return _this.renderTrack(res); });
    };
    TrackComponent.prototype.renderTrack = function (res) {
        this.track = res;
        console.log(this.track);
    };
    TrackComponent.prototype.back = function () {
        this.locationStrategy.back();
    };
    TrackComponent = __decorate([
        core_1.Component({
            selector: 'theTrack',
            template: "\n     <div *ngIf=\"track\">\n        <h1>{{ track.name }}</h1>\n\n        <p>\n          <img src=\"{{ track.album.images[1].url }}\">\n        </p>\n\n        <p>\n          <audio controls src=\"{{ track.preview_url }}\"></audio>\n        </p>\n\n        <p><a href (click)=\"back()\">Back</a></p>\n     </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, spotifyService_1.SpotifyService, router_1.LocationStrategy])
    ], TrackComponent);
    return TrackComponent;
})();
exports.TrackComponent = TrackComponent;
//# sourceMappingURL=TrackComponent.js.map