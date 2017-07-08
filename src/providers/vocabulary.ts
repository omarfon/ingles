import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";


@Injectable()
export class VocabularyService {

vocabulario: FirebaseListObservable<any>;

  constructor(public fireDatabase: AngularFireDatabase) {
    
    this.vocabulario = this.fireDatabase.list('/vocabulario');
  }
  getAll(){
    return this.vocabulario;
  }
 
}
