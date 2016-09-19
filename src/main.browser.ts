import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { RouterModule } from '@angular/router';

import { IMPORTS, DECLARATIONS, PROVIDERS, BOOTSTRAP } from './module.common';
import { HomeComponent } from './app/components/+home/';

@NgModule({
  bootstrap: BOOTSTRAP,
  declarations: [...DECLARATIONS],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    ...IMPORTS,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  providers: [
    ...PROVIDERS
  ]
})
export class MainModule {

}
