import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import {ServicioAutenticacion} from './servicioAutent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.title;

  constructor( public authApp: ServicioAutenticacion ) {
  }
}
