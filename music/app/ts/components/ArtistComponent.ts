import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteParams, LocationStrategy} from 'angular2/router';
import {SpotifyService} from "../services/spotifyService";

/*
 * Services
 */

@Component({
    selector: 'artist',
    directives: [CORE_DIRECTIVES],
    template: `
      <div *ngIf="artist">
        <h1>{{ artist.name }}</h1>

        <p>
          <img src="{{ artist.images[0].url }}">
        </p>

        <p><a href (click)="back()">Back</a></p>
      </div>
  `
})

export class ArtistComponent{
    id: string;
    artist: Object;

    constructor(
        public spotify: SpotifyService,
        public routeParams: RouteParams,
        public locationStrategy: LocationStrategy
    ){
        this.id = this.routeParams.get('id');
    }
    ngOnInit(): void {
        this.spotify
            .getArtist(this.id)
            .subscribe((res: any) => this.renderArtist(res));
    }
    renderArtist(res: any): void {
        this.artist = res;
        console.log(this.artist);
    }
    back(): void {
        this.locationStrategy.back();
    }

}