import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-warningalert',
  templateUrl: './warningalert.component.html',
  styleUrls: ['./warningalert.component.css']
})
export class WarningalertComponent implements OnInit {


  //for input
  currentItem = 'Television'

  //for output
  items = ['item1', 'item2', 'item3', 'item4'];

  // for both

  name = 'Angular in parent component'

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: string) {  //for output
    this.items.push(newItem);
  }

}
