import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-five-homework',
  templateUrl: './class-five-homework.component.html',
  styleUrls: ['./class-five-homework.component.css']
})
export class ClassFiveHomeworkComponent implements OnInit {

  startGameCount: number[] = [0];

  gameCount: number = 0;

  intervalID: number;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.intervalID = window.setInterval(() => {
      this.startGameCount.push(this.gameCount += 1)
    }, 1000);
  }

  onStopGame(){
    clearInterval(this.intervalID)
  }

}
