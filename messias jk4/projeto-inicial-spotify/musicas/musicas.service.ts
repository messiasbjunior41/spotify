import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable() 
export class MusicasService {

    emitirMusicaCriado = new EventEmitter<string>();
    static criouNovoMusica = new EventEmitter<string>();

    private musicas: string[] = ['Angular 2', 'Java', 'Phonegap'];

    constructor(private logService: LogService){
        console.log('MusicasService');
    }

    getMusicas() {
        this.logService.consoleLog('Obtendo lista de musicas');
        return this.musicas;
    }

    addMusica(musica: string){
        this.logService.consoleLog(`Criando um novo musica ${musica}`);
        this.musicas.push(musica);
        this.emitirMusicaCriado.emit(musica);
        MusicasService.criouNovoMusica.emit(musica);
    }
}