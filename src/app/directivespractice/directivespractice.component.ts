import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivespractice',
  templateUrl: './directivespractice.component.html',
  styles:[`
  .online{
    color:green;
  }
  `]
})
export class DirectivespracticeComponent implements OnInit {

  isSecret: boolean = false;

  clickCounts= [];


  constructor() { }

  ngOnInit(): void {
  }

  onChangeDisplay() {

    this.clickCounts.push(this.clickCounts.length+1);
    this.isSecret = true;
  }


  getBGColor(count:number){
    return count > 5 ? 'white' : 'red'
  }

}
