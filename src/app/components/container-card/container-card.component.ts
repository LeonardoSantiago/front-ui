import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container-card',
  templateUrl: './container-card.component.html',
  styleUrls: ['./container-card.component.scss']
})
export class ContainerCardComponent implements OnInit {
  config: any;
  ui: any;
  initialItem = 0;
  finalItem: any;
  size = 8;
  items = [];
  page = 1;
  constructor(private http: HttpClient) { }


  filterItems(items, oriented) {
 
  }

  ngOnInit() {
    this.ui.items.filter((item, index) => {
      if(index < this.size) {
        this.items.push(item)
      }
    });
  }

  onNext() {
    this.initialItem = this.size;
    this.size = this.size + 8;
    const url = `${this.ui.paginationSource}${this.page}`;

    if(this.ui.items.length < this.size) {
      this.page = this.page + 1;
      this.http.get(url).subscribe((res: { items: []}) => {
        res.items.map((item) => {
          this.ui.items.push(item);
        })
        this.items = this.ui.items.filter((item, index) => (index < this.size && index >= this.initialItem))
        console.log(this.items)
      })
    } else {
      this.items = this.ui.items.filter((item, index) => (index < this.size && index >= this.initialItem))
      console.log(this.items, 'XD')
    }

    
   
  }

}
