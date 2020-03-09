import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ServicioAutenticacion {

  email = '';
  pass = '';
  authUser = null;

  constructor(public  miauth: AngularFireAuth,
              private db: AngularFireDatabase) { }

  user = this.miauth.authState;

  /*user = this.miauth.authState.pipe( map( authState => {
    console.log('authState', authState);
    if (!authState) {
      return null;
    } else {
      // …
      return authState;
    }
  }) );
*/
  login() {
    console.log('login!');
  }
  glogin() {
    console.log('google login!');
    this.miauth.auth.signInWithPopup( new auth.GoogleAuthProvider() )
      .then( user => {
        console.log('user logado: ', user);
        this.email = '';
        this.pass = '';
        this.authUser = user.user;
      })
      .catch( error => {
        console.log('error en google login: ', error);
      });
  }
  logout() {
    console.log('logout!');
    this.miauth.auth.signOut();
  }
}
