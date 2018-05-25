import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote('Always find a reason to smile', 'Me', 'Admin', 0, 0),
    new Quote('Coding is not for weaklings!', 'Adiela', 'Admin', 0, 0)
    ]

  delete(quote): void {
    this.quotes.splice(quote,1);
  }
  constructor() { }

  ngOnInit() {
  }

}
