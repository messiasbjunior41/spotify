import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MusicasService } from '../musicas/musicas.service';
import { MusicasComponent } from './musicas.component';

@NgModule({
  declarations: [
    MusicasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MusicasComponent]//,
  //providers: [MusicasService]
})
export class MusicasModule { }
