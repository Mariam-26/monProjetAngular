// OnInit EST APPELE AU MOMENT DE LA CREATION D1 COMPONENT C'EST AUSSI 1 INTERFACE
import { Component, OnInit } from '@angular/core';
import { monPojetAngular } from '../models/mon-projet-angular.model';
import { MonProjetService } from '../services/mon-projets.service';

// @ EST 1 DECORATEUR QUI APPORTE DES MODIFICATIONS A 1 CLASS
@Component({
  selector: 'app-mon-projet-list',
  templateUrl: './mon-projet-list.component.html',
  styleUrls: ['./mon-projet-list.component.scss'],
})

// DECLARATION DE CLASS
export class MonProjetListComponent implements OnInit {
  monPojetAngulars!: monPojetAngular[];

  constructor(private monProjetService: MonProjetService) {}

  // METHODE DE OnInit
  ngOnInit(): void {
    this.monPojetAngulars = this.monProjetService.getAllMonPojetAngulars();

  }
}
