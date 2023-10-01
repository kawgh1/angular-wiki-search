import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private readonly httpClient: HttpClient) { }

  search(term: string) {
    return this.httpClient.get('https://en.wikipedia.org/w/api.php?origin=*', {
      params: {
        action: 'query',
        format: 'json',
        srsearch: term,
        list: 'search'
 
      }
    })
  }
}
