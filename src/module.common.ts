import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';

import { HomeComponent } from './app/components/+home/';
import { App } from './app/components/app/';


export const IMPORTS = [
  FormsModule,
  UniversalModule
];

export const DECLARATIONS = [
  HomeComponent,
  App
];

export const PROVIDERS = [

];

export const BOOTSTRAP = [
  App
];
