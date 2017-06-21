import { Component } from '@angular/core';
import {CursosPage } from '../cursos/cursos';
import {VocabularioPage } from '../vocabulario/vocabulario';
import {ExercisesPage } from '../exercises/exercises';
import {MePage } from '../me/me';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CursosPage;
  tab2Root = VocabularioPage;
  tab3Root = ExercisesPage;
  tab4Root = MePage;

  constructor() {

  }
}
