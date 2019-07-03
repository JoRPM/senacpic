import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import{ FotoModule } from './foto/foto.module';
import { FotoRegistroComponent } from './foto-registro/foto-registro.component';
import { AppRoutingModule } from './foto/app.routing.module';
import { FotoListComponent } from './foto-list/foto-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  // responsavel por importar componentes
  declarations: [
    AppComponent,
    FotoRegistroComponent,
    FotoListComponent,
    HomeComponent,
    NotFoundPageComponent
  ],
  // responsavel por importar modulos
  imports: [
    BrowserModule,
    FotoModule,
    AppRoutingModule
  ],
  // responsavel por importar services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
