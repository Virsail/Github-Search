import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() { }
}
