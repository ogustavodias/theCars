import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CarsListComponent } from './components/cars/cars-list/cars-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: CarsListComponent },
];
