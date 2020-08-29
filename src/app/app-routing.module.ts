import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';


const routes: Routes = [{path: 'board', component: BoardComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  
  exports: [RouterModule]
})
export class AppRoutingModule { }
