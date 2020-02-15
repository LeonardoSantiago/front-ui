import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  config: any;
  ui: any;
  count = 0;
  constructor() { }

  ngOnInit() {
    console.log(this.count, )
  }

  ngOnChanges() {
    console.log(++this.count )
  }

}
