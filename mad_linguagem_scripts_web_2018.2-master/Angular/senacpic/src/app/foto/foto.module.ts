import { NgModule } from "@angular/core";
import { FotoComponent } from './foto.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FotoComponent
    ],
    // são os modulos que serão incorporados nesse arquivo
    imports: [
        CommonModule,
        HttpClientModule
    ],
    // são os componentes que serão permitido 'acesso por terceiros'
    exports: [
        FotoComponent
    ]
})
export class FotoModule {}