import { GramaticaPage } from './../gramatica/gramatica';
import { Component } from '@angular/core';
import {CursosPage } from '../cursos/cursos';
import {ExercisesPage } from '../exercises/exercises';
import {MePage } from '../me/me';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CursosPage;
  tab2Root = GramaticaPage;
  tab3Root = ExercisesPage;
  tab4Root = MePage;

  constructor() {

  }
}
