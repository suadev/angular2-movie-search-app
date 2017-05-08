import { Component, NgModule } from '@angular/core';
import { MoviesService } from "app/movies.service";
import { CommonConstants } from "app/CommonConstants";
// import { NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  searchType: string = 't';
  searchKey: string = '';
  response: any;
  commons: CommonConstants = CommonConstants.getInstance();

  constructor(public service: MoviesService) {

  }

  DoSearch() {
    this.commons.requestCount++;
    this.service.SearchMovie(this.searchKey, this.searchType).subscribe(
      res => this.response = res,
      error => {
        console.log("Error: ", error);
        this.commons.requestCount--;
        this.response = null;
      },
      () =>  this.commons.requestCount--
    );

  }

  changeSearchType(type: string) {
    console.log(type);
    this.searchType = type;
  }
}