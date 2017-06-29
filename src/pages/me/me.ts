import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SONIDOS } from '../../assets/json/words';

import { Sonidos } from '../../assets/interfaces/sonidos.interface';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  query:string = "";

  sonidos:Sonidos [] = [];
  sonidosCopy:Sonidos [] = [];
  sonido: null;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {

    this.sonidos = SONIDOS;
    this.sonidosCopy = this.sonidos;
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
onInput(){
  this.sonidos = this.sonidosCopy;

    let val = this.query;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.sonidos = this.sonidos.filter((sonido) => {
        return (sonido.palabra.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
}
}

