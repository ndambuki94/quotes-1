import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
// It maintains quote Model
  quoteModel: Quote;
// It maintains quote form display status. By default it will be false.
  showNew: Boolean = false;
// It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';

// This method associate to New Button.
  onNew() {
// Initiate new quote.
    this.quoteModel = new Quote("","", "", new Date(), 0,0);
// Change submitType to 'Save'.
    this.submitType = 'Save';
// display quote entry section.
    this.showNew = true;
  }

// This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
// Push quote model object into quote list.
      this.quotes.push(this.quoteModel);
    }
// Hide quote entry section.
    this.showNew = false;
  }

// This method associate to Cancel Button.
  onCancel() {
// Hide quote entry section.
    this.showNew = false;
  }

  quotes = [
    new Quote('Always find a reason to smile', 'Me', 'Admin', new Date(2, 2,2,2,2), 0,0),
    new Quote('Coding is not for weaklings!', 'Adiela', 'Admin', new Date(2, 2,2,2,2), 0, 0)
  ];

  delete(quote) {
    this.quotes.splice(quote, 1);
  }

  addCount(quote.upvotes) {
    quote.upvotes = quote.upvotes + 1
  }

  constructor() { }

  ngOnInit() {
  }

}
