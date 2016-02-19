import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteParams, RouterLink, LocationStrategy} from 'angular2/router';

/*
 * Services
 */
import {SpotifyService} from "../services/spotifyService";

@Component({
    selector: 'album',
    directives: [RouterLink, CORE_DIRECTIVES],
    template:`
    <div *ngIf="album">
    <h1>{{ album.name }}</h1>
    <h2>{{ album.artists[0].name }}</h2>

    <p>
      <img src="{{ album.images[1].url }}">
    </p>

    <h3>Tracks</h3>
    <ol>
      <li *ngFor="#t of album.tracks.items">
        <a [routerLink]="['/Tracks', {id: t.id}]">
          {{ t.name }}
        </a>
      </li>
    </ol>

    <p><a href (click)="back()">Back</a></p>
  </div>
    `
})

export class AlbumComponent{
    id: string;
    album: Object;

    constructor(
        public spotify: SpotifyService,
        public routeParams: RouteParams,
        public locationStrategy: LocationStrategy
    ){
        this.id = this.routeParams.get('id');
    }
    ngOnInit(): void{
        this.spotify
        .getAlbum(this.id)
        .subscribe((res: any) => this.renderTrack(res));
    }
    renderTrack(res: any): void{
        this.album = res;
    }
    back(): void {
        this.locationStrategy.back();
    }
}