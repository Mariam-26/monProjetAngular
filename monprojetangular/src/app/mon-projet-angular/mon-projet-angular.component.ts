//On voit ici la construction du component. On voit une classe TypeScript qui s'appelle projetComponent, avec un  constructor  et une méthode  ngOnInit. Dès maintenant, dans le fichier  mon-projet-angular.component.ts, supprimez : le contenu de la classe (le constructor et la méthode  ngOnInit) ; la partie "implements OnInit" de la déclaration de classe ;l'importOnInitdepuis  @angular/core  (laissez bien Component).

import { MonProjetService } from './../services/mon-projets.service';
import { monPojetAngular } from './../models/mon-projet-angular.model';
import { Component, OnInit, Input /* Input  doit être ajouté aux imports depuis  @angular/core  ! */} from '@angular/core';
@Component({
  selector: 'app-mon-projet-angular',
  templateUrl: './mon-projet-angular.component.html',
  styleUrls: ['./mon-projet-angular.component.scss'],
})
export class MonProjetAngularComponent implements OnInit {
  @Input()/* Pour qu'une propriété puisse être injectée depuis l'extérieur d'un component, il faut lui ajouter le décorateur  @Input() */ monPojetAngular!: monPojetAngular;
  buttonText!: string;

// Un décorateur en TypeScript permet, entre autres, d'apporter des modifications à une classe. Ici, le décorateur  @Component  vient ajouter tous les comportements nécessaires à l'utilisation de ce component dans l'application. Il est importé depuis le package  @angular/core. Tout se passe sous le capot, on n'a pas à s'en occuper !

  constructor(private monProjetService: MonProjetService) {}

  ngOnInit() {
    this.buttonText = 'Oh Projet !';
  }

  // FONCTION POUR AJOUTER OU SOUSTRAIRE UN LIKE
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
