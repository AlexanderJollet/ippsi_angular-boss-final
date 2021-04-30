import { Component, OnInit } from '@angular/core';
import { Player } from '../../../core/models/player';
import { Combattant } from '../../../core/models/combattant';
import { CombattantService } from '../../../shared/services/combattant.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-partie',
  templateUrl: './creer-partie.component.html',
  styleUrls: ['./creer-partie.component.css']
})
export class CreerPartieComponent implements OnInit {
  afficherButton = false;
  Player1 = new Player();
  combattant = new Combattant();
  combattants: Combattant[] = [];
  constructor(private combattantService: CombattantService, private router: Router) { }
  ngOnInit(): void {
    this.combattants = this.combattantService.getAll();
  }
  miser(){
    this.afficherButton2();
    let mise = this.Player1.argent;
    let combattantchoisi = this.combattant.nom;
    if(this.calculerCombat() == combattantchoisi){
      this.Player1.argent = this.Player1.argent + mise;
      {{ 'Félicitations votre argent est égale à '+ this.Player1.argent}}
    }
    else{
      this.Player1.argent = this.Player1.argent - 15;
      {{ 'Vous avez perdu ! Votre argent est égale à '+ this.Player1.argent}}
    }
  }
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  arreterPartie(){
    this.router.navigate(['']);
  }

  calculerCombat(){
    var Jedi = this.getRandomIntInclusive(0, 100);; 
    var Droide = this.getRandomIntInclusive(0, 100);
    if(Jedi > Droide) {
      {{ 'Le Jedi à gagné face au Droide avec '+Jedi+' points contre '+Droide+ 'points pour le Droide' }}
      return 'Jedi';
    }
    else{
      {{ 'Le Droide à gagné face au Jedi avec '+Droide+' points contre '+Jedi+ 'points pour le Jedi' }}
      return 'Droide';
    }
  }

  afficherButton2(){
      this.afficherButton=true;
  }

  continuerPartie() {
    this.Player1.argent = this.Player1.argent;
    this.router.navigate(['nouvelle-partie']);
  }

}

