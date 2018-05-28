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
    this.quoteModel = new Quote("","", "", Date(), 0,0);
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
    new Quote('Always find a reason to smile', 'Me', 'Admin', new Date(2018, 4,27,23,1), 0,0),
    new Quote('Coding is not for weaklings!', 'Adiela', 'Admin', new Date(2018, 4,27,23,1), 0, 0)
    new Quote('People who use time wisely spend it on activities that advance their overall purpose in life.', 'John C. Maxwell', 'Admin', new Date(2018, 4,27,23,5), 0,0),
    new Quote('I would argue that nothing gives life more purpose than the realization that every moment of consciousness is a precious and fragile gift.', 'Steven Pinker', 'Admin', new Date(2018, 4,27,23,8), 0, 0)
    new Quote('If you organize your life around your passion, you can turn your passion into your story and then turn your story into something bigger―something that matters.', 'Blake Mycoskie', 'Admin', new Date(2018, 4,28,7,42), 0,0),
    new Quote('The secret of success is constancy to purpose.', 'Benjamin Disraeli', 'Admin', new Date(2018, 4,28,7,43), 0, 0)
    new Quote('It is hard to fail, but it is worse never have tried to succeed.', 'Theodore Roosevelt', 'Admin', new Date(2018, 4,28,7,45), 0, 0)
    new Quote('We were born to succeed, not to fail.', 'Henry David Thoreau', 'Admin', new Date(2018, 4,28,7,46), 0, 0)
    new Quote(' Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma - which is living with the results of other people\'s thinking. Don\'t let the noise of others\' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. ', 'Steve Jobs', 'Admin', new Date(2018, 4,28,7,49), 0, 0)

  ];

  delete(quote) {
    this.quotes.splice(quote, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
