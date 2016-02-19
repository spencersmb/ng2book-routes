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
var http_1 = require('angular2/http');
require('rxjs/Rx');
var SpotifyService = (function () {
    function SpotifyService(http) {
        this.http = http;
    }
    SpotifyService.prototype.query = function (URL, params) {
        var queryURL = "" + SpotifyService.BASE_URL + URL;
        if (params) {
            queryURL = queryURL + "?" + params.join('&');
        }
        return this.http.request(queryURL).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.search = function (query, type) {
        return this.query("/search", [
            ("q=" + query),
            ("type=" + type)
        ]);
    };
    SpotifyService.prototype.searchByTrack = function (query) {
        return this.search(query, 'track');
    };
    SpotifyService.prototype.getTrack = function (id) {
        return this.query("/tracks/" + id);
    };
    SpotifyService.prototype.getArtist = function (id) {
        return this.query("/artists/" + id);
    };
    SpotifyService.prototype.getAlbum = function (id) {
        return this.query("/albums/" + id);
    };
    SpotifyService.BASE_URL = 'https://api.spotify.com/v1';
    SpotifyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpotifyService);
    return SpotifyService;
})();
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotifyService.js.map