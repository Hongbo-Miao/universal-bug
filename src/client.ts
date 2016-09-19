// the polyfills must be the first thing imported
import 'angular2-universal-polyfills';
// import { enableProdMode} from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal';

import { MainModule } from './main.browser';

const platformRef = platformUniversalDynamic();

// enableProdMode();
// log.disableAll();

// on document ready bootstrap Angular 2
document.addEventListener('DOMContentLoaded', () => {
  platformRef.bootstrapModule(MainModule);
});
