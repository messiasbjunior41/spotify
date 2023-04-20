import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MusicaService } from '../musicas/musicas.service';
import { CriarMusicaComponent } from './criar-musica.component';
import { ReceberMusicaCriadoComponent } from '../receber-musica-criado/receber-musica-criado.component';

@NgModule({
  declarations: [
    CriarMusicaComponent,
    ReceberMusicaCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarMusicaComponent]//,
  //providers: [MusicasService]
})
export class CriarMusicaModule { }
