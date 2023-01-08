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

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.buttonText = 'Oh Projet !';
  }
  onProjet() {
    if (this.buttonText === 'Oh Projet !') {
      this.monPojetAngular.projet++;
      this.buttonText = 'Oops, unProjet !';
    } else {
      this.monPojetAngular.projet--;
      this.buttonText = 'Oh Projet !';
    }
  }
}
