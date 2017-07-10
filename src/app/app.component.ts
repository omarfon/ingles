import { LoginPage } from './../pages/login/login';
import { TabsPage } from './../pages/tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigPage } from './../pages/config/config';
import { MisdatosPage } from './../pages/misdatos/misdatos';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { AutenticacionService } from "./servicios/autenticacion.service";
import { BienvenidaPage } from './../pages/bienvenida/bienvenida';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('contenido') menu : NavController;
  rootPage:any = HomePage;
  datos = MisdatosPage;
  config = ConfigPage;
  tabs = TabsPage;
  login = LoginPage;
  bien = BienvenidaPage;

usuarioEstaConectado = false;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public menuCtrl: MenuController,
              public autenticacionService: AutenticacionService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp({
      apiKey: "AIzaSyBXCV71VqdSs50LOUw8ZDOFw_Ya9NiQ75w",
      authDomain: "ifeepsalud.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(
      usuario => {
        if(usuario != null){
          this.usuarioEstaConectado = true;
          this.menu.setRoot(this.tabs);
        }else{
          this.usuarioEstaConectado = false;
          this.menu.setRoot(HomePage);
        }
      }
    )
  }
  irAPagina(pagina:any){
      this.menu.setRoot(pagina);
      this.menuCtrl.close();
    }
  terminarSesion(){
    this.autenticacionService.terminarSesion();
    this.menuCtrl.close();
  }
}

