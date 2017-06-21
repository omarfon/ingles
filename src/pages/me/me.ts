import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SONIDOS } from '../../assets/json/words';

import { Sonidos } from '../../assets/interfaces/sonidos.interface';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  sonidos:Sonidos [] = [];

  sonido: null;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {

    this.sonidos = SONIDOS;
  }

  escuchar(sonido){
    console.log(sonido);

  let audio = new Audio();
  audio.src = sonido.audio;
  audio.load();
  audio.play();

  sonido.reproduciendo = true;

  setTimeout(()=> sonido.reproduciendo = false, sonido.duracion * 1000);
}
}

