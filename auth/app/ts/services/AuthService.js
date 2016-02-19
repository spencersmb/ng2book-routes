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
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (user, password) {
        if (user === 'spencer' && password === '1234') {
            localStorage.setItem('username', user);
            return true;
        }
        return false;
    };
    AuthService.prototype.getUser = function () {
        return localStorage.getItem('username');
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('username');
    };
    AuthService.prototype.isLogged = function () {
        return this.getUser() !== null;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
})();
exports.AuthService = AuthService;
exports.AUTH_PROVIDERS = [
    core_1.provide(AuthService, { useClass: AuthService })
];
