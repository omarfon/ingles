import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-vocabulary-detail',
  templateUrl: 'vocabulary-detail.html',
})
export class VocabularyDetailPage {

vo = null;
slide = null;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams
              ) {
                this.vo = this.navParams.get('vo');
              }
reproducir(slide){
  console.log(slide);

  let audio = new Audio();
  audio.src = slide.sonido;
  audio.load();
  audio.play();

  slide.reproduciendo = true;

  setTimeout(()=> slide.reproduciendo = false, slide.duracion * 1000);
}
}
