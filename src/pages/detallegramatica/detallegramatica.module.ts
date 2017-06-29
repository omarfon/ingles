import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallegramaticaPage } from './detallegramatica';

@NgModule({
  declarations: [
    DetallegramaticaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallegramaticaPage),
  ],
  exports: [
    DetallegramaticaPage
  ]
})
export class DetallegramaticaPageModule {}
