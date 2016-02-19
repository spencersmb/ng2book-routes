import {Injectable, provide} from 'angular2/core';

@Injectable()
export class AuthService{
    login(user: string, password: string): boolean{
        if(user === 'spencer' && password === '1234'){
            localStorage.setItem('username', user);
            return true;
        }

        return false;
    }
    getUser(): any {
        return localStorage.getItem('username');
    }
    logout(): void{
        localStorage.removeItem('username');
    }

    //this gets returned using the canActivate hook in the protected component
    isLogged(): boolean {
        //return true if get user is not empty
        return this.getUser() !== null;
    }
}

//export an AUTH_PROVIDERS, so it can be injected into our app:
export var AUTH_PROVIDERS: Array<any> = [
    provide(AuthService, {useClass: AuthService})
];