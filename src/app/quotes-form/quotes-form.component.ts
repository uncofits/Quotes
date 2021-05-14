import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  quoted = new Quote(0,"","","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();

  constructor() { }

  ngOnInit(): void {
  }

}
