import {Injectable, provide} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class SpotifyService {

    static BASE_URL: string = 'https://api.spotify.com/v1';
    constructor(public http: Http){

    }
    //build query that takes in end of url and params
    //turns it into an observable
    query(URL: string, params?: Array<string>): Observable<any[]> {
        let queryURL: string = `${SpotifyService.BASE_URL}${URL}`;
        if (params) {
            queryURL = `${queryURL}?${params.join('&')}`;
        }

        return this.http.request(queryURL).map((res: any) => res.json());
    }

    //build out search function to be modular
    search(query: string, type: string): Observable<any[]> {
        return this.query(`/search`, [
            `q=${query}`,
            `type=${type}`
        ]);
    }
    searchByTrack(query: string): Observable<any[]> {
        return this.search(query, 'track');
    }
    getTrack(id: string): Observable<any[]> {
        return this.query(`/tracks/${id}`);
    }
    getArtist(id: string): Observable<any[]>{
        return this.query(`/artists/${id}`);
    }
    getAlbum(id: string): Observable<any[]>{
        return this.query(`/albums/${id}`);
    }
}