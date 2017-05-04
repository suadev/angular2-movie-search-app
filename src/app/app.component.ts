import { Component, NgModule } from '@angular/core';
import { MoviesService } from "app/movies.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  searchKey: string = '';
  response: any;
  searchType: string = 't';

  constructor(public service: MoviesService) {

  }

  DoSearch() {
    this.service.SearchMovie(this.searchKey, this.searchType).subscribe((res) => {
      this.response = res;
    });
  }

  changeSearchType(type:string){
    console.log(type);
    this.searchType = type;
  }

}
