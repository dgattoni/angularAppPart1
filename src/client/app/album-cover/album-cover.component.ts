import {Component, Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'album-cover',
  templateUrl: 'album-cover.component.html',
  styleUrls: ['album-cover.component.css'],
  providers: [],
  directives: [RouterLink],
  pipes: []
})
export class AlbumCoverComponent {
   
    @Input() album: any;
    
    selectAlbum() {
      alert(this.album.name);
    };

}
