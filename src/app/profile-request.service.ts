import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';
import {environment} from '../environments/environment';

@Injectable()
export class ProfileRequestService {

  fromURL: string = 'https://api.github.com';

  constructor(private http: HttpClient) {

   }

   getUsers(userName: string): Observable<User[]> {
    return this.http.get<User[]>(this.fromURL + '/users/' + userName);
}
}
