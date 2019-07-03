import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoRegistroComponent } from '../foto-registro/foto-registro.component';
import { FotoListComponent } from '../foto-list/foto-list.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';
import { SigninComponent } from '../home/signin/signin.component';

const routes:Routes = [
    { path: '', component: HomeComponent },
    { path: 'form', component: FotoRegistroComponent },
    { path: 'list', component: FotoListComponent },
    { path: 'login', component: SigninComponent },
    { path: '**', component: NotFoundPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}