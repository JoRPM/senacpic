import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto.model';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: []
})
export class FotoListComponent implements OnInit {

  fotos:Foto[];

  constructor(private fotoService: FotoService){
    fotoService.listaFotos().subscribe(
      fotosDB => this.fotos = fotosDB,
      erroDB => console.log(erroDB)
    );
  }

  ngOnInit() {
  }

}
