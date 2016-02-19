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
var SearchComponent = (function () {
    function SearchComponent(spotify, router, routeParams) {
        this.spotify = spotify;
        this.router = router;
        this.routeParams = routeParams;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.search();
    };
    SearchComponent.prototype.submit = function (query) {
        this.router.navigate(['/Search', { query: query }]);
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        this.query = this.routeParams.get('query');
        if (!this.query) {
            return;
        }
        this.spotify
            .searchByTrack(this.query)
            .subscribe(function (res) { return _this.renderResults(res); });
    };
    SearchComponent.prototype.renderResults = function (res) {
        this.results = null;
        if (res && res.tracks && res.tracks.items) {
            this.results = res.tracks.items;
            console.log(res);
        }
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
            template: "\n    <h1>search</h1>\n\n    <p>\n        <input type=\"text\" #newquery\n            [value]=\"query\"\n            (keydown.enter)=\"submit(newquery.value)\">\n    <button (click)=\"submit(newquery.value)\">Search</button>\n    </p>\n    <div *ngIf=\"results\">\n        <div *ngIf=\"!results.length\">\n            No tracks were found with the term '{{ query }}'\n        </div>\n        <div *ngIf=\"results.length\">\n          <h1>Results</h1>\n\n            <div class=\"row\">\n                <div class=\"col-sm-6 col-md-4\" *ngFor=\"#t of results\">\n                    <div class=\"thumbnail\">\n                        <div class=\"content\">\n                            <img src=\"{{ t.album.images[0].url }}\" class=\"img-responsive\">\n                            <div class=\"caption\">\n                                <h3>\n                                    <a [routerLink]=\"['/Artists', {id: t.artists[0].id}]\">{{ t.artists[0].name }}</a>\n                                </h3>\n                                <br>\n                                <p>\n                                    <a [routerLink]=\"['/Tracks', {id: t.id}]\">{{ t.name }}</a>\n                                </p>\n                            </div>\n                            <div class=\"attribution\">\n                                <h4>\n                                    <a [routerLink]=\"['/Albums', {id: t.album.id}]\">{{ t.album.name }}</a>\n                                </h4>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [spotifyService_1.SpotifyService, router_1.Router, router_1.RouteParams])
    ], SearchComponent);
    return SearchComponent;
})();
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=SearchComponent.js.map