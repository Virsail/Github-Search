import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Observable} from 'rxjs';
import { Repo} from '../repo';
import { GithubService } from '../github.service';
import {environment} from '../../environments/environment';
import {ProfileRequestService} from '../profile-request.service';

import { User } from '../user';




@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [ GithubService, ProfileRequestService ]
})
export class BoardComponent implements OnInit {

  userName = 'virsail-mbagaya';
  repo: Repo[];
  users: User[];

  loading = false;
  errorMessage;
  windowScrolled: boolean;

  constructor(private githubService: GithubService, private profileRequestservice: ProfileRequestService) { 

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }

  ngOnInit(): void {
  }

}
