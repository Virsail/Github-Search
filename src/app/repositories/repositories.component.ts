import { Component, OnInit } from '@angular/core';

import {SearchRequestService} from '../search-request.service';
import {Repository} from '../repository';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
    providers: [SearchRequestService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    repository: Repository;
    public searchRepo: string;
   

    searchRepos(virsail) {
        this.searchRepo = '';

    }

    constructor(public gitRepoRequest: SearchRequestService ) { }


  ngOnInit(): void {
    this.gitRepoRequest.gitRepos(this.searchRepo);

  }

}
