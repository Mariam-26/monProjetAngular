import { Component, Input, OnInit } from '@angular/core';
import { monPojetAngular } from '../models/mon-projet-angular.model';
import { MonProjetService } from '../services/mon-projets.service';

@Component({
  selector: 'app-single-projet-angular',
  templateUrl: './single-projet-angular.component.html',
  styleUrls: ['./single-projet-angular.component.scss']
})
export class SingleProjetAngularComponent {
  @Input() monPojetAngular!: monPojetAngular;
  buttonText!: string;

// Un décorateur en TypeScript permet, entre autres, d'apporter des modifications à une classe. Ici, le décorateur  @Component  vient ajouter tous les comportements nécessaires à l'utilisation de ce component dans l'application. Il est importé depuis le package  @angular/core. Tout se passe sous le capot, on n'a pas à s'en occuper !

  constructor(private monProjetService: MonProjetService) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.buttonText = 'Oh Projet !';
  }
  onProjet() {
    if (this.buttonText === 'Oh Projet !') {
      this.monProjetService.projetMonPojetAngularById(
        this.monPojetAngular.id, 'projet'
      );
      this.buttonText = 'Oops, unProjet !';
    } else {
      this.monProjetService.projetMonPojetAngularById(
        this.monPojetAngular.id, 'unprojet'
      );
      this.buttonText = 'Oh Projet !';
    }
  }

}
