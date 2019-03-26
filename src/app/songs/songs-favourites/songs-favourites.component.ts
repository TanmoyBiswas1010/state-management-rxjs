import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';
import { SongsService } from '../services/songs.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'songs-favourites',
    template: `
    <div class="songs">
    <songs-list
    [list]="favourites$ | async"
    (toggle)="onToggle($event)">
    Favourites
    </songs-list>
    </div>`
})
export class SongsFavouritesComponent {

    favourites$: Observable<any[]>;
    constructor(private store: Store,
        private songService: SongsService) { }
    ngOnInit(): void {

        this.favourites$ = this.store.select('playlist').pipe(
            filter(Boolean)).pipe(
                map(playlist => playlist.filter(track => track.favourite))
            );
    }
    onToggle(event) {
        this.songService.toggle(event)
    }
}