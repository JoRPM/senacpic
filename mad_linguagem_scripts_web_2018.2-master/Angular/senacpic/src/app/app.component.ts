import { Component } from '@angular/core';
import { Foto } from './foto/foto.model';
import { FotoService } from './foto/foto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  valorBusca:string

  msgNoConsole(){
    console.log('Elemento clicado')
  }
}