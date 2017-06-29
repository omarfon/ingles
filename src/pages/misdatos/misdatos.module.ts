import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisdatosPage } from './misdatos';

@NgModule({
  declarations: [
    MisdatosPage,
  ],
  imports: [
    IonicPageModule.forChild(MisdatosPage),
  ],
  exports: [
    MisdatosPage
  ]
})
export class MisdatosPageModule {}
