import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { BoardComponent } from './board/board.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './github.service';
import {ProfileRequestService} from './profile-request.service';
import { RouterModule, Routes } from '@angular/router';
import { SweetAlertService } from './sweet-alert.service';
import { UpperCasePipe } from './upper-case.pipe';

const routes: Routes = [
  {path: 'board', component: BoardComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    UpperCasePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  // providers: [ GithubService, ProfileRequestService],

  bootstrap: [AppComponent]
})
export class AppModule { }
