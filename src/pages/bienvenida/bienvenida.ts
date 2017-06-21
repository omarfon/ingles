import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { LoginPage } from '../login/login';




@Component({
  selector: 'page-bienvenida',
  templateUrl: 'bienvenida.html',
})
export class BienvenidaPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bienvenida');
  }

irARegistro(){
  this.navCtrl.push(RegistroPage);
}
irALogin(){
  this.navCtrl.push(LoginPage);
}
terminCondin(){
  let alert = this.alertCtrl.create({
    title: 'Terminos y Condiciones',
    message:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ',
    buttons: ['Entiendo']
  });
  alert.present();
  }

}
