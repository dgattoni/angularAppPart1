import {Component, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'tracks-page',
  templateUrl: 'tracks-page.component.html',
  styleUrls: ['tracks-page.component.css']
})
export class TracksPageComponent {

  name: string;

  constructor(params: RouteParams) {
    this.name = params.get('name');
  }
  selectTrack() {
    alert('Clicked on Play Button!');
  };
}
