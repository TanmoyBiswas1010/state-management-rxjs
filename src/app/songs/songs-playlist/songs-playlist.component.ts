import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';
import { SongsService } from '../services/songs.service';
import { Observable } from 'rxjs';



@Component({
    selector: 'songs-playlist',
    template: `
    <div *ngFor="let song of playlist$ | async">
    {{song.id}}
    </div>
   `
})
export class SongsPlaylistComponent implements OnInit {

    playlist$:Observable<any[]>;
    constructor(
        private store: Store,
        private songService: SongsService
    ) { }

    ngOnInit(): void {
        this.songService.getPlaylist$.subscribe();      
        this.playlist$=this.store.select('playlist');
    }
}