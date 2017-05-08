import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map"
import { CommonConstants } from "app/CommonConstants";

@Injectable()
export class MoviesService {
    
    constructor(private http: Http) {

    }

    public SearchMovie(searchKey: string, searchType: string) {         
        var url: string = 'https://www.omdbapi.com/?{type}=';
        url = url.replace('{type}', searchType);
        return this.http.get(url + searchKey)
            .map(result => result.json());
    }
}
