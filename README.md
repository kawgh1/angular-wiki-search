### Wikipedia API
- https://www.mediawiki.org/wiki/API:Opensearch#JavaScript
- https://www.mediawiki.org/w/api.php?action=help&modules=query

  `search(term: string) {
        return this.httpClient.get('https://en.wikipedia.org/w/api.php?origin=*', {
        params: {
            action: 'query',
            format: 'json',
            srsearch: term,
            list: 'search'
        }
        })
    }`

  ### Styling
  - https://bulma.io/
  - in styles.css  @import 'bulma/css/bulma.css';
  - npm install bulma


### Notes on RxJS
- Separate 3rd party library from Angular
- Used extensively by Angular for managing data
- We use this *instead* of promises or async/await for handling async tasks
- Not strictly required! We can still use promises or async/await
- RxJS makes building some kinds of features *really* easy compared to writing normal code
- Not easy to understand, but once mastered, possibilities are endless