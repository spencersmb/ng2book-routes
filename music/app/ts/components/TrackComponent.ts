import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteParams, LocationStrategy} from 'angular2/router';

/*
 * Services
 */
import {SpotifyService} from "../services/spotifyService";

@Component({
    selector: 'theTrack',
    template:`
     <div *ngIf="track">
        <h1>{{ track.name }}</h1>

        <p>
          <img src="{{ track.album.images[1].url }}">
        </p>

        <p>
          <audio controls src="{{ track.preview_url }}"></audio>
        </p>

        <p><a href (click)="back()">Back</a></p>
     </div>
    `
})

export class TrackComponent{
    id: string;
    track: Object;

    constructor(
        public routeParams: RouteParams,
        public spotify: SpotifyService,
        public locationStrategy: LocationStrategy
    ){
        this.id = this.routeParams.get('id');
    }
    ngOnInit(): void {
        //observable
        this.spotify
            .getTrack(this.id)
            .subscribe((res: any) => this.renderTrack(res));
    }
    renderTrack(res: any): void {
        this.track = res;
        console.log(this.track);
    }
    back(): void {
        this.locationStrategy.back();
    }
}