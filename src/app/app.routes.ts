import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { PlanesComponent } from './components/planes/planes.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SeriesComponent } from './components/series/series.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { DetallesDePeliComponent } from './components/detalles-de-peli/detalles-de-peli.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'create', component: CreateAccountComponent },
    { path: 'perfiles', component: PerfilesComponent},
    { path: 'planes', component: PlanesComponent},
    { path: 'miCuenta', component: MiCuentaComponent},
    { path: 'ayuda', component: FaqComponent},
    { path: 'home', component: HomepageComponent},
    { path: 'peliculas', component: PeliculasComponent},
    { path: 'series', component: SeriesComponent},
    { path: 'favoritos', component: FavoritosComponent},
    { path: 'detalles-de-peli', component: DetallesDePeliComponent},

    { path: '', redirectTo: '/login', pathMatch: 'full' }

];
