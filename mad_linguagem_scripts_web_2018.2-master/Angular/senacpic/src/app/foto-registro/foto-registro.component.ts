import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { Foto } from '../foto/foto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foto-registro',
  templateUrl: './foto-registro.component.html',
  styleUrls: []
})
export class FotoRegistroComponent implements OnInit {
 
   fotoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private fotoService:FotoService, private router: Router) {}

  ngOnInit(): void {
    this.fotoForm = this.formBuilder.group({
      titulo: ['', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(15)
      
      ]
    ],
      tituloAlt: ['', Validators.required
    
    ],
      descricao: ['', Validators.required
    
    ],
      url: ['', Validators.required
    
    ]
    });
  }

  addFoto() {
    const novaFoto = this.fotoForm.getRawValue() as Foto;
    this.fotoService
    .adcFoto(novaFoto)
    .subscribe(
      ()=> this.router.navigateByUrl('/list'),
      err => {
        console.log(err)
        this.fotoForm.reset();
      }
    );
  }

  

  }

