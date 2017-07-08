import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { NgForm } from "@angular/forms";
import { AutenticacionService } from "../../app/servicios/autenticacion.service";


@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public autenticacionService: AutenticacionService,
              public alertCtrl: AlertController) {
  }

 irAList(){
   this.navCtrl.push(TabsPage);
 }

 registrarUsuario(formulario: NgForm){
   this.autenticacionService.registrarUsuario(
          formulario.value.correo,
          formulario.value.clave)
          .then(info => console.log(info))
          .catch(error =>{
            let alerta = this.alertCtrl.create({
              title: 'Ocurrio un error',
              message: 'Ocurrio un error registrando al usuario' + error,
              buttons: ['ok']
            })
            alerta.present();
          })
 }
}
