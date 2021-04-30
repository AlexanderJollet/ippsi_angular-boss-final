import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Party } from 'src/app/core/models/party';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListPartyService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Party[]> {
    return this.httpClient.get<Party[]>(environment.apis.parties.url);
  }

}
