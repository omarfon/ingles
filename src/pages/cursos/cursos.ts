import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VocabularyDetailPage } from '../vocabulary-detail/vocabulary-detail'

import { VOCABULARIO } from '../../assets/json/vocabulary';

import { Vocabulary } from '../../assets/interfaces/vocabulary.interface';



@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
})
export class CursosPage {


  vocabulario:Vocabulary [] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams
) {

  this.vocabulario = VOCABULARIO;

}
irAVocabularyDetail(vo){

  this.navCtrl.push(VocabularyDetailPage,{
      vo: vo,
  });
 
}
}
