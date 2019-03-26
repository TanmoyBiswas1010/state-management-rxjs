import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';
import { SongsService } from '../services/songs.service';
import { Observable } from 'rxjs';



@Component({
    selector: 'songs-playlist',
    template: `
    <div class="songs">
    <songs-list
    [list]="playlist$ | async"
    (toggle)="onToggle($event)">
    Playlist
    </songs-list>
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
    
        this.playlist$=this.store.select('playlist');
        this.songService.getPlaylist$.subscribe(data=> console.log(data));  
    }

    onToggle(event) {
        this.songService.toggle(event)
    }
}