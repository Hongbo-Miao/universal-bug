import { Routes } from '@angular/router';

import { HomeComponent } from '../components/+home/';

export const router: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
