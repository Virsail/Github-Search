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
  User: User[];

  loading = false;
  errorMessage;
  windowScrolled: boolean;

  constructor(private githubService: GithubService, private profileRequest: ProfileRequestService) { 

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }

  scrollToTop() {
    (function smoothscroll() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
          }
        })();
    }

    public getRepos(event: any) {
      this.loading = true;

      let promise = new Promise((resolve , reject) => {
        this.githubService.getRepos (this.userName).toPromise().then(response => {
          this.repo = response; this.loading = false; // this will push all data to array [repo]
           resolve();
         },
         error => {
           this.errorMessage = 'An error was encountered';
           this.loading = false;
         }
       );
       });
       return promise;
     }

     public getUsers(event: any) {
      this.loading = true;

      let promise = new Promise((resolve , reject) => {
        this.profileRequest.getUsers(this.userName).toPromise().then(response => {
          this.User = response; this.loading = false; // this will push all data to array [repo]
           resolve();
         },
         error => {
           this.errorMessage = 'An error was encountered';
           this.loading = false;
         }
       );
       });
       return promise;
     }
     
  ngOnInit(): void {
  }

}
