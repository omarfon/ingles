import { RegistroPage } from './../registro/registro';
import { NgForm } from '@angular/forms';
import { AutenticacionService } from './../../app/servicios/autenticacion.service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            public autenticacionService: AutenticacionService,
            public alertCtrl: AlertController) {
  }

  irAList(){
   this.navCtrl.push(TabsPage);
 }
iniciarSesion(formulario: NgForm){
  this.autenticacionService.iniciarSesion(
      formulario.value.correo,
      formulario.value.clave)
      .then(info=> console.log('Usuario conectado'))
      .catch(error =>{
            let alerta = this.alertCtrl.create({
              title: 'Ocurrio un error',
              message: 'Ocurrio un error iniciando la sesion' + error,
              buttons: ['ok']
            })
            alerta.present();
          })
}
irARegistro(){
  this.navCtrl.push(RegistroPage);
}
}
