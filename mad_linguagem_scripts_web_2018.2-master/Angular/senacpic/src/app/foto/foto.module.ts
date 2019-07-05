import { NgModule } from "@angular/core";
import { FotoComponent } from './foto.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FotoRegistroComponent } from '../foto-registro/foto-registro.component';
import { FotoListComponent } from '../foto-list/foto-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FotoComponent,
        FotoRegistroComponent,
        FotoListComponent
    ],
    // são os modulos que serão incorporados nesse arquivo
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    // são os componentes que serão permitido 'acesso por terceiros'
    exports: [
        FotoComponent
    ]
})
export class FotoModule {}