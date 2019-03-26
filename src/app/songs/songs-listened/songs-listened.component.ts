import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';
import { SongsService } from '../services/songs.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
    selector:'songs-listened',
    template:`
    <div class="songs">
    <songs-list
    [list]="listened$ | async"
    (toggle)="onToggle($event)">
    Listened
    </songs-list>
    </div>
    `
})
export class SongsListenedComponent { 

    listened$:Observable<any[]>;
    constructor( private store: Store,
        private songService: SongsService){}
        ngOnInit(): void {
    
            this.listened$=this.store.select('playlist').pipe(
                filter(Boolean)).pipe(
                    map(playlist => playlist.filter(track => track.listened))
                );
        }
        onToggle(event) {
            this.songService.toggle(event)
        }
}