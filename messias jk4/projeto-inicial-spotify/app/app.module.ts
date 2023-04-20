import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MusicasModule } from './musicas/musicas.module';
import { MusicasService } from './musicas/musicas.service';
import { CriarMusicaModule } from './criar-musica/criar-musica.module';
import { LogService } from './shared/log.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarMusicaModule,
    MusicasModule
  ],
  providers: [LogService],
  //providers: [MusicasService],
  bootstrap: [AppComponent]
})
export class AppMusicasModule { }
