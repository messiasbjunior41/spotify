import { Component, OnInit } from '@angular/core';

import { MusicasService } from '../musicas/musicas.service';

@Component({
  selector: 'app-receber-musica-criado',
  templateUrl: './receber-musica-criado.component.html',
  styleUrls: ['./receber-musica-criado.component.css']
})
export class ReceberMusicaCriadoComponent implements OnInit {

    Musica: string;

  constructor(private musicasService: MusicasService) { }

  ngOnInit() {
    this.musicasService.emitirMusicaCriado.subscribe(
        musicaCriado => this.musica = musicaCriado
    );
  }

}
