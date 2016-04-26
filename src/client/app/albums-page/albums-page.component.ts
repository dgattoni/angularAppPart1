import {Component, OnInit} from 'angular2/core';
import {NgFor} from 'angular2/common';

import {AlbumCoverComponent} from '../album-cover/index';

@Component({
  moduleId: __moduleName,
  selector: 'albums-page',
  templateUrl: 'albums-page.component.html',
  styleUrls: ['albums-page.component.css'],
  directives: [AlbumCoverComponent, NgFor]
})
export class AlbumsPageComponent {

  albums: any = [];
  title: string = 'Pick an Album';
  
  
  constructor() {
    this.albums = [
      {
        name: 'Any Album', 
        image: 'https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg'
      },
      {
        name: 'Rocket to Russia', 
        image: 'http://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-rocket-to-russia.jpg'
      },
      {
        name: 'Dark Side of the Moon', 
        image: 'http://www.pinkfloydonline.com/wp-content/gallery/albumcovers/darkside.jpg'
      },
      {
        name: 'Justin ', 
        image: 'http://imagesmtv-a.akamaihd.net/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2014/04/justin-bieber-believe-album-cover.jpg?quality=0.85&format=jpg&width=480'
      }
    ];
  }
}
