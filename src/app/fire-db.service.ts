import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  constructor(private db: AngularFireDatabase) { }

  altausuario() {
    this.db.object('users/userUID').update({email: 'afa@bbb.com'});
    console.log('Insertado');
  }
}
