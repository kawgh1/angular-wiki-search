import { Component, OnInit } from '@angular/core';
import { WikipediaResponse, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'wikisearch';
  pages: any[] = [];

  constructor(private readonly wikipediaService: WikipediaService) {}

  ngOnInit(): void {}

  onTerm(term: string) {
    this.wikipediaService.search(term).subscribe((pages) => {
        this.pages = pages    });
  }
}
