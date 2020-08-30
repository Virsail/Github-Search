import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { user } from './user';
import {environment} from '../environments/environment';

@Injectable()

export class ProfileRequestService {


  // tslint:disable-next-line:no-inferrable-types
  fromURL: string = 'https://api.github.com/users/daneden?access_token=' + '966cf13ed72dc160aa6aa53c1991a1a408425a35'
  constructor(private http: HttpClient) {
  }

  getUsers(userName: string): Observable<user[]> {
    return this.http.get<user[]>(this.fromURL + '/users/' + userName);

}

}