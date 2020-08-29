import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from './repo';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() { }
}
