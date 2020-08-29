import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Observable} from 'rxjs';
import { Repo} from '../repo';
import { GithubService } from '../github.service';
import {environment} from '../../environments/environment';
import {ProfileRequestService} from '../profile-request.service';
import { User } from '../user';
import { SweetAlertService } from 'angular-sweetalert-service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
