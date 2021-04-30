import { Component, OnInit } from '@angular/core';
import { Player } from '../../core/models/player';
import { Combattant } from '../../core/models/combattant';
import { CombattantService } from '../../shared/services/combattant.service'

@Component({
  selector: 'app-creer-partie',
  templateUrl: './creer-partie.component.html',
  styleUrls: ['./creer-partie.component.css']
})
export class CreerPartieComponent implements OnInit {
  Player1 = new Player();
  combattants: Combattant[] = [];
  constructor(private combattantService: CombattantService) { }

  ngOnInit(): void {
    this.combattants = this.combattantService.getAll();
  }
}
