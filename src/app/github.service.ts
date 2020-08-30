import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from './repo';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  baseURL: string = ' 966cf13ed72dc160aa6aa53c1991a1a408425a35';

  constructor(private http: HttpClient) { 

  }

  getRepos(userName: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.baseURL + '/users/' + userName + '/repos');
}
}
