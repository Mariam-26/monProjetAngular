//On voit ici la construction du component. On voit une classe TypeScript qui s'appelle projetComponent, avec un  constructor  et une méthode  ngOnInit. Dès maintenant, dans le fichier  mon-projet-angular.component.ts, supprimez : le contenu de la classe (le constructor et la méthode  ngOnInit) ; la partie "implements OnInit" de la déclaration de classe ;l'importOnInitdepuis  @angular/core  (laissez bien Component).

import { MonProjetService } from './../services/mon-projets.service';
import { monPojetAngular } from './../models/mon-projet-angular.model';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-mon-projet-angular',
  templateUrl: './mon-projet-angular.component.html',
  styleUrls: ['./mon-projet-angular.component.scss'],
})
export class MonProjetAngularComponent implements OnInit {
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
