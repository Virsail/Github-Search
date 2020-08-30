import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';
import {environment} from '../environments/environment';

@Injectable()
export class ProfileRequestService {

  fromURL: string = ' 966cf13ed72dc160aa6aa53c1991a1a408425a35';

  constructor(private http: HttpClient) {

   }

   getUsers(userName: string): Observable<User[]> {
    return this.http.get<User[]>(this.fromURL + '/users/' + userName);
}
}
