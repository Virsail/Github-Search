import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchRequestService} from './search-request.service';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UpperCasePipe } from './upper-case.pipe';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './highlight.directive';




@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    RepositoriesComponent,
    SearchFormComponent,
    UserInfoComponent,
    UpperCasePipe,
    FooterComponent,
    HighlightDirective,

    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  

  ],
  providers: [SearchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
