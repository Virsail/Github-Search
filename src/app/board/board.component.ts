
   import { Observable, from} from 'rxjs';
   import { repos} from '../repos';
   import { Component, OnInit, Inject, HostListener } from '@angular/core';
   import { GithubService } from '../github.service';
   import { environment } from '../../environments/environment';
   import {ProfileRequestService} from '../profile-request.service';
   import { user } from '../user';
   
  
   
   @Component({
     selector: 'app-board',
     templateUrl: './board.component.html',
     styleUrls: ['./board.component.css'],
     providers: [ GithubService, ProfileRequestService ]
   })
   export class BoardComponent implements OnInit {
     userName = 'Virsail-Mbagaya';
     repos: repos[];
     users: user[];
     
   
     loading = false;
     errorMessage;
     windowScrolled: boolean;
     // tslint:disable-next-line:max-line-length
     constructor( private githubService: GithubService, private profileRequest: ProfileRequestService ) {
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
   
   
     //   options = {
     //   title: 'Are you sure?',
     //   text: 'You won\'t be able to revert this!',
     //   type: 'warning',
     //   showCancelButton: true,
     //   confirmButtonColor: '#3085d6',
     //   cancelButtonColor: '#d33',
     //   confirmButtonText: 'Yes, delete it!'
     // };
   
   
   
   
   public getRepos(event ?) {
     this.loading = true;
     // tslint:disable-next-line:prefer-const
     let promise = new Promise((resolve , reject) => {
      this.githubService.getRepos (this.userName).toPromise().then(response => {
        this.repos = response; this.loading = false; 
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
   public getUsers(event ?) {
     this.loading = true;
     // tslint:disable-next-line:prefer-const
     let promise = new Promise((resolve , reject) => {
      this.profileRequest.getUsers(this.userName).toPromise().then(response => {
        this.users = response; this.loading = false; 
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
