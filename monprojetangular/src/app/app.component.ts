import { monPojetAngular } from './models/mon-projet-angular.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  monPojetAngulars!: monPojetAngular[];

  ngOnInit() {
    this.monPojetAngulars = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis toute petite !!!',
        imageUrl:
          'https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg',
        createdDate: new Date(),
        projet: 0,
        location: 'Paris',
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis toute petite !!!',
        imageUrl:
          'https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg',
        createdDate: new Date(),
        projet: 0,
        location: 'la montagne',
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis toute petite !!!',
        imageUrl:
          'https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg',
        createdDate: new Date(),
        projet: 0,
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis toute petite !!!',
        imageUrl:
          'https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg',
        createdDate: new Date(),
        projet: 0,
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis toute petite !!!',
        imageUrl:
          'https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg',
        createdDate: new Date(),
        projet: 0,
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis toute petite !!!',
        imageUrl:
          'https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg',
        createdDate: new Date(),
        projet: 0,
      },
    ];
  }
}
