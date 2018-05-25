import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote('Always find a reason to smile', 'Me', 'Admin', new Date(5, 5, 5, 5, 5, 5)),
    new Quote('Coding is not for weaklings!', 'Adiela', 'Admin', new Date(5, 5, 5, 5, 5, 5))
  ];

  constructor() { }

  ngOnInit() {
  }

}
