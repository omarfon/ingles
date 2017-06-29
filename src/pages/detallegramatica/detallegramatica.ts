import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detallegramatica',
  templateUrl: 'detallegramatica.html',
})
export class DetallegramaticaPage {

g = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.g = this.navParams.get('g');
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallegramaticaPage');
  }

}
