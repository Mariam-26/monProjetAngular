import { Component, OnInit } from '@angular/core';
import { monPojetAngular } from '../models/mon-projet-angular.model';
import { MonProjetService } from '../services/mon-projets.service';

@Component({
  selector: 'app-mon-projet-list',
  templateUrl: './mon-projet-list.component.html',
  styleUrls: ['./mon-projet-list.component.scss'],
})
export class MonProjetListComponent implements OnInit {
  monPojetAngulars!: monPojetAngular[];

  constructor(private monProjetService: MonProjetService) {}

  ngOnInit(): void {
    this.monPojetAngulars = this.monProjetService.getAllMonPojetAngulars();

  }
}
