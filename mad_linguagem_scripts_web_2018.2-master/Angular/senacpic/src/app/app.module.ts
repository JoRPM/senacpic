import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import{ FotoModule } from './foto/foto.module';
import { AppRoutingModule } from './foto/app.routing.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeModule } from './home/home.module';


@NgModule({
  // responsavel por importar componentes
  declarations: [
    AppComponent,
    NotFoundPageComponent
    
  ],
  // responsavel por importar modulos
  imports: [
    BrowserModule,
    FotoModule,
    AppRoutingModule,
    HomeModule
  ],
  // responsavel por importar services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
