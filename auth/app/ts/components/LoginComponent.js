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
var core_1 = require("angular2/core");
var AuthService_1 = require("../services/AuthService");
var router_1 = require('angular2/router');
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.message = '';
    }
    LoginComponent.prototype.login = function (username, password) {
        this.message = '';
        if (!this.authService.login(username, password)) {
            this.message = 'Incorrect credentials';
            setTimeout(function () {
                this.message = '';
            }.bind(this), 2500);
        }
        return false;
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/home']);
        return false;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"message\">\n    {{ message }}\n    </div>\n\n      <form class=\"form-inline\" *ngIf=\"!authService.getUser()\">\n        <div class=\"form-group\">\n          <label for=\"username\">User:</label>\n          <input class=\"form-control\" name=\"username\" #username>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"password\">Password:</label>\n          <input class=\"form-control\" type=\"password\" name=\"password\" #password>\n        </div>\n\n        <a class=\"btn btn-default\" (click)=\"login(username.value, password.value)\">\n          Submit\n        </a>\n      </form>\n\n      <div class=\"well\" *ngIf=\"authService.getUser()\">\n        Logged in as <b>{{ authService.getUser() }}</b>\n        <a href (click)=\"logout()\">Log out</a>\n      </div>\n    "
        }), 
        __metadata('design:paramtypes', [AuthService_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;
