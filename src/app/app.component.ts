import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigPage } from './../pages/config/config';
import { MisdatosPage } from './../pages/misdatos/misdatos';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('contenido') menu : NavController;
  rootPage:any = HomePage;
  datos = MisdatosPage;
  config = ConfigPage;


  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  irAPagina(pagina:any){
      this.menu.setRoot(pagina);
      this.menuCtrl.close();
    }
}

