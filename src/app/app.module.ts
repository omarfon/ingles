import { MisdatosPage } from './../pages/misdatos/misdatos';
import { ConfigPage } from './../pages/config/config';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


//paginas de registro
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';

//pagina de bienvenida
import { BienvenidaPage } from '../pages/bienvenida/bienvenida';

//inicio de los tabs
import { TabsPage } from '../pages/tabs/tabs';

import { CursosPage } from '../pages/cursos/cursos';
import { VocabularioPage } from '../pages/vocabulario/vocabulario';
import { ExercisesPage } from '../pages/exercises/exercises';
import { MePage } from '../pages/me/me';
import { GramaticaPage } from './../pages/gramatica/gramatica';
import { DetallegramaticaPage } from './../pages/detallegramatica/detallegramatica';


import { VocabularyDetailPage } from '../pages/vocabulary-detail/vocabulary-detail';
import { AutenticacionService } from "./servicios/autenticacion.service";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 
export const firebaseConfig = {
  apiKey: "AIzaSyCaCUfymN17RrmknxSQoZY4WtapUlosvR4",
    authDomain: "medicalappoinments.firebaseapp.com",
    databaseURL: "https://medicalappoinments.firebaseio.com",
    projectId: "medicalappoinments",
    storageBucket: "medicalappoinments.appspot.com",
    messagingSenderId: "133678678971"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    CursosPage, VocabularioPage, ExercisesPage, MePage,
    TabsPage,
    BienvenidaPage,
    VocabularyDetailPage,
    GramaticaPage,
    DetallegramaticaPage,
    ConfigPage,
    MisdatosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'medicalappoinments'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    CursosPage, VocabularioPage, ExercisesPage, MePage,
    TabsPage,
    BienvenidaPage,
    VocabularyDetailPage,
    GramaticaPage,
    DetallegramaticaPage,
    ConfigPage,
    MisdatosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutenticacionService

  ]
})
export class AppModule {}
