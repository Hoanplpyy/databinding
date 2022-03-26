import { Component, OnInit } from '@angular/core';
import { breakPoint } from './breakPoint.model';
@Component({
  selector: 'app-break-point',
  templateUrl: './break-point.component.html',
  styleUrls: ['./break-point.component.css']
})
export class BreakPointComponent implements OnInit {

  selfCompanyName = '列印測試';

  listData: breakPoint[]=[];

  constructor() { }

  ngOnInit(): void {

    for (let i = 0; i < 100; i++) {
      let subData: breakPoint = {
        no: i + 1,
        name: i + 'A',
        phone: i + 100,
        address: i + 'B'
      }
      this.listData.push(subData)
    }
  }

  printPage(){
    window.print()
  }

}
