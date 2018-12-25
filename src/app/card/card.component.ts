import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public src: string;

  constructor() { }

  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  ngOnInit() {
    this.src = this.image.api + this.image.message + '?size=' + this.image.fontsize;
  }

  public generateSrc(): void {
    this.src = this.src.replace(/\&ts=[\w]*/gi, '') + '&ts=' + Date.now();
  }
}

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}