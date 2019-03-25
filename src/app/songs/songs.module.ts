import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SongsPlaylistComponent } from './songs-playlist/songs-playlist.component';
import { SongsFavouritesComponent } from './songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './songs-listened/songs-listened.component';
import { SongsListComponent } from './song-list/songs-list.component';
// import { SongsService } from './services/songs.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        SongsPlaylistComponent,
        SongsFavouritesComponent,
        SongsListenedComponent,
        SongsListComponent
    ],
    exports:[
        SongsPlaylistComponent,
        SongsFavouritesComponent,
        SongsListenedComponent
    ],
    providers:[]
})
export class SongsModule {

}