import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  numberOfIteration = 6;
  arrayOfColors = [];
  constructor() {}

  generateColor(num: number) {
    for (let i = 0; i < num; i++) {
      const hexxx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
      let fullColor = '';
      for (let j = 0; j < 6; j++) {
        fullColor += hexxx[Math.round(Math.random() * (hexxx.length - 1))];
      }
      this.arrayOfColors.push(fullColor);
    }
  }
  ngOnInit() {
    this.generateColor(this.numberOfIteration);
    console.log(this.arrayOfColors);
  }


}





