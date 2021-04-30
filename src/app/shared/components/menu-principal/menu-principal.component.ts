import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  @Input() titre: string;
  libelleConnexion : string ='Se connecter';
  @Output() logoActive: EventEmitter<number> = new EventEmitter<number>(false);

  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {
    this.logoActive.emit(2);
    this.libelleConnexion = this._AuthService.estConnecte() ? 'Déconnexion' : 'Se connecter';
  }

  clickSurLogo() {
    console.info('je click sur le a href');
    this.logoActive.emit(1);

  }
}
