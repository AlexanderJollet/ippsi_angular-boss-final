import { Component, OnInit } from '@angular/core';
import { Party } from 'src/app/core/models/party';
import { ListPartyService } from 'src/app/shared/services/list-party.service';



@Component({
  selector: 'app-list-party',
  templateUrl: './list-party.component.html',
  styleUrls: ['./list-party.component.css']
})
export class ListPartyComponent implements OnInit {
  parties: Party[] = [];

  constructor(private ListPartyService:ListPartyService ) { }

  ngOnInit(): void {
    const observable = this.ListPartyService.getAll();
    
    observable.subscribe(parties => {
      this.parties = parties;
    })
  }

}
