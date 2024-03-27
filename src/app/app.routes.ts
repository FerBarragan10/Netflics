import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { PlanesComponent } from './planes/planes.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'create', component: CreateAccountComponent },
    { path: 'perfiles', component: PerfilesComponent},
    { path: 'planes', component: PlanesComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' }

];
