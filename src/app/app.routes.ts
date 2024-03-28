import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { PlanesComponent } from './components/planes/planes.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'create', component: CreateAccountComponent },
    { path: 'perfiles', component: PerfilesComponent},
    { path: 'planes', component: PlanesComponent},
    { path: 'miCuenta', component: MiCuentaComponent},
    { path: 'ayuda', component: FaqComponent},
    { path: 'home', component: HomepageComponent},

    { path: '', redirectTo: '/login', pathMatch: 'full' }

];
