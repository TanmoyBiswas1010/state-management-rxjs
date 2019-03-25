import { Component, OnInit } from '@angular/core';
import { Store } from './store';
import { SongsService } from './songs/services/songs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'state-management-Rx';

  constructor(private songService: SongsService,
    private store: Store) { }
  todos$ = this.store.select('playlist');

  ngOnInit(): void {

    // this.songService.getSongs().subscribe(data => {
    //   console.log(data)
    // });
  }
}
