- ### Wikipedia API
  - https://www.mediawiki.org/wiki/API:Opensearch#JavaScript
  - https://www.mediawiki.org/w/api.php?action=help&modules=query

  `
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
    `
  
  <br>


- ### Styling
  - https://bulma.io/
  - in styles.css  @import 'bulma/css/bulma.css';
  - npm install bulma

  
  <br>

- ### Notes on RxJS
  - Separate 3rd party library from Angular
  - Used extensively by Angular for managing data
  - We use this *instead* of promises or async/await for handling async tasks
  - Not strictly required! We can still use promises or async/await
  - RxJS makes building some kinds of features *really* easy compared to writing normal code
  - Not easy to understand, but once mastered, possibilities are endless

  <br>

  - ### Using RxJS to create custom API observables
    - This allows us to only send the data we need to display in our components, much more efficient


  ` 
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
            // returns an Observable of type WikipediaResponse
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
  `