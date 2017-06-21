import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BienvenidaPage } from '../bienvenida/bienvenida';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
irABienvenida(){
  this.navCtrl.push(BienvenidaPage);
}
}
