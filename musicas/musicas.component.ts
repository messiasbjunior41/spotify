import { Component, OnInit } from '@angular/core';

import { MusicasService } from './musicas.service';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css'],
  providers: [MusicasService]
})
export class MusicasComponent implements OnInit {

  cursos: string[] = [];
  //musicasService: MusicasService;

  constructor(private musicasService: MusicasService) { 
    //this.musicasService = new musicasService();
    //this.musicasService = _musicasService;
  }

  ngOnInit() {
    this.musicas = this.musicasService.getmusicas();

    MusicasService.criouNovamusicas.subscribe(
        musicas => this.musicas.push(musicas)
    );
  }

}
