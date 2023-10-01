import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

export interface WikipediaResponse {
  query: {
    // search is an array of objects
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private readonly httpClient: HttpClient) { }

  search(term: string) {
    // returns an Observable
    return this.httpClient.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php?origin=*', {
      params: {
        action: 'query',
        format: 'json',
        srsearch: term,
        list: 'search'
 
      }
    }).pipe(
      pluck('query', 'search')
    );
  }
}
