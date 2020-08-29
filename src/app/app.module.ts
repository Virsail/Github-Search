import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './board/board.component';
import { GithubService } from './github.service';
import {ProfileRequestService} from './profile-request.service';
import { RouterModule, Routes } from '@angular/router';
import { SweetAlertService } from './sweet-alert.service';

const routes: Routes = [
  {path: 'board', component:BoardComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
