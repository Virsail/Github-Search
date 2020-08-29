import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {

  fromURL: string = 'https://api.github.com';

  constructor(private http: HttpClient) { }
}
getUsers(userName: string): Observable<user[]> {
  return this.http.get<user[]>(this.fromURL + '/users/' + userName);

}

}
