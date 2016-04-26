import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AlbumsPageComponent} from './albums-page/index';
import {TracksPageComponent} from './tracks-page/index';

@Component({
  moduleId: __moduleName,
  selector: 'music-app',
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
  templateUrl: 'music.html',
  styleUrls: ['music.css'],
  directives: [ROUTER_DIRECTIVES, AlbumsPageComponent],
  pipes: []
})
@RouteConfig([
  {path: '/', component: AlbumsPageComponent, name: 'AlbumsPageComponent'},
  {path: '/:id', component: TracksPageComponent, name: 'TracksPageComponent'}
])
export class MusicApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
