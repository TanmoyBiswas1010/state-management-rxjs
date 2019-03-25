import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Store } from '../../store';
import { Observable } from 'rxjs';



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
        this.store.set('playlist', next)}));

    constructor(
        private http: HttpClient,
        private store: Store
    ) {

    }
}