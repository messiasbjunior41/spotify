import { Component, OnInit } from '@angular/core';

import { MusicasService } from '../musicas/musicas.service';

@Component({
  selector: 'app-criar-musica',
  templateUrl: './criar-musica.component.html',
  styleUrls: ['./criar-musica.component.css'],
  providers: [MusicasService]
})
export class CriarMusicaComponent implements OnInit {

    musicas: string[] = [];

  constructor(private musicaService: MusicasService) { }

  ngOnInit() {
    this.musicas = this.musicaService.getMusicas();
  }

  onAddMusicas(musica: string){
    this.musicaService.addMusica(musica);
  }

}
