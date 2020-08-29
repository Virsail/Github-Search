import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Observable} from 'rxjs';
import { Repo} from '../repo';

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
