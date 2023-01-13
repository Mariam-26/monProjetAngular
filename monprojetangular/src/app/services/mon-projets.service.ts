import { monPojetAngular } from './../models/mon-projet-angular.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonProjetService {
  monPojetAngulars: monPojetAngular[] = [
    {
      id: 1,
      title: 'Doodoo mignon',
      description: 'Ma meilleure ami depuis toute petite !!!',
      imageUrl:
        'https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg',
      createdDate: new Date(),
      projet: 0,
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Restaurant',
      description: 'Mon passage dans mon restaut préferé !!!',
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/02/03/03/54/burger-2034433__480.jpg',
      createdDate: new Date(),
      projet: 0,
      location: 'Paris',
    },
    {
      id: 3,
      title: 'Île privée',
      description: "Lors d'une de mes vacances sur une île privéelse.",
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/07/07/18/10/island-2482200__480.jpg',
      createdDate: new Date(),
      projet: 0,
      location: 'Mon île',
    },
    {
      id: 4,
      title: 'La montagne',
      description: 'Balade en montagne',
      imageUrl:
        'https://cdn.pixabay.com/photo/2021/05/14/15/17/mountain-6253669__480.jpg',
      createdDate: new Date(),
      projet: 0,
      location: 'Alsace',
    },
    {
      id: 5,
      title: "Feu d'artifice",
      description: "Feu d'artifice de la nouvelle année 2023",
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/01/04/21/00/fireworks-1953253__480.jpg',
      createdDate: new Date(),
      projet: 0,
      location: 'Paris',
    },
    {
      id: 6,
      title: 'Discothèque',
      description: 'Le jour de mon anniverssaire !!!',
      imageUrl:
        'https://cdn.pixabay.com/photo/2014/04/03/00/39/disco-309016__480.png',
      createdDate: new Date(),
      projet: 0,
      location: 'Paris',
    },
  ];

  getAllMonPojetAngulars(): monPojetAngular[] {
    return this.monPojetAngulars;
  }

  getMonPojetAngularById(monPojetAngularId: number): monPojetAngular {
    const monPojetAngular = this.monPojetAngulars.find(
      (monPojetAngular) => monPojetAngular.id === monPojetAngularId
    );

    if (!monPojetAngular) {
      throw new Error('Projet not found');
    } else {
      return monPojetAngular;
    }
  }

  projetMonPojetAngularById(monPojetAngularId: number, projetType: 'projet' | 'unprojet'): void {
    const monPojetAngular = this.getMonPojetAngularById(monPojetAngularId);

    projetType === 'projet'
      ? monPojetAngular.projet++
      : monPojetAngular.projet--;
  }
}
