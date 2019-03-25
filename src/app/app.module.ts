import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Store } from './store';
import { SongsModule } from './songs/songs.module';
import { SongsService } from './songs/services/songs.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SongsModule
  ],
  providers: [SongsService,Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
