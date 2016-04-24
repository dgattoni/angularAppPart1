import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {MusicApp} from './app/music';

if (environment.production) {
  enableProdMode();
}

bootstrap(MusicApp);
