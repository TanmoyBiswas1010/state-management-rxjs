import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Store } from '../../store';
import { Observable } from 'rxjs';
import { Response } from 'selenium-webdriver/http';
import { forEach } from '@angular/router/src/utils/collection';
import { State } from '../../state';

export interface Song {
    id: number,
    name: string,
    listened: boolean,
    favourite: boolean
  }
  
@Injectable()
export class SongsService {

    getPlaylist$: Observable<Song[]> = this.http
    .get<Song[]>('assets/db.json')
    .pipe(tap(next => {
        this.store.set('playlist', next['playlist'])}));

    constructor(
        private http: HttpClient,
        private store: Store
    ) {}

    toggle(event:any){
        this.http.get<State>('assets/db.json')
        .subscribe((tracks:State)=>{
          
            const songs=this.store.value.playlist;
          
          const playlist =  songs.map((song:Song) => {
                if( event.track.id === song.id){
                    return {...song,...event.track};
                }
                else{
                    return song;
                }
            })
            this.store.set('playlist', playlist);
        });

    }
}