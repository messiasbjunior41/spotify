import { Component, OnInit } from '@angular/core';

import { MusicasService } from './musicas.service';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css'],
  providers: [MusicasService]
})
export class MusicasComponent implements OnInit {

  musicas: string[] = [];
  //musicasService: MusicasService;

  constructor(private musicasService: MusicasService) { 
    //this.musicasService = new MusicasService();
    //this.musicasService = _musicasService;
  }

  ngOnInit() {
    this.musicas = this.musicasService.getMusicas();

    MusicasService.criouNovoMusica.subscribe(
      Musicas => this.musicas.push(musica)
    );
  }

}
