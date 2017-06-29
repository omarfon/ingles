import { DetallegramaticaPage } from './../detallegramatica/detallegramatica';
import { Grammar } from '../../assets/interfaces/grammar.interface';
import { GRAMMAR } from '../../assets/json/grammar';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';




@Component({
  selector: 'page-gramatica',
  templateUrl: 'gramatica.html',
})
export class GramaticaPage {

  gramatica:Grammar [] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {

    
  this.gramatica = GRAMMAR.splice(0);
    console.log(this.gramatica);
  }
irADetalleGramatica(g){
  this.navCtrl.push(DetallegramaticaPage,{
    g:g,
  });
  console.log(g.value);
}


}
