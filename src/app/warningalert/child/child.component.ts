import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() item = ''; // decorate the property with @Input()
  // In this case, @Input() decorates the property item, which has a type of string

  @Output() itemChange = new EventEmitter<string>(); // decorate the property with @Input()
  // In this case, @Input() decorates the property item, which has a type of string

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
