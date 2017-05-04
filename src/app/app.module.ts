import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule} from  '@angular/router';
import { MoviesService } from "app/movies.service";

  
@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
          // {path: "**", component: PageNotFoundComponent}
      ])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  //  requestCount : number = 0;
}
