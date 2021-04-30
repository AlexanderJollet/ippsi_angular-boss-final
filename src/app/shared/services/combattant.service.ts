import { Injectable } from '@angular/core';
import { Combattant } from 'src/app/core/models/combattant';
import { COMBATTANTS } from 'src/app/core/models/mock-combattant';

@Injectable({
  providedIn: 'root'
})
export class CombattantService {

  constructor() { }

  getAll(): Combattant[] {
    return COMBATTANTS;
  }
}
