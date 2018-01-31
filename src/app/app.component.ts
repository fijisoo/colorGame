import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numberOfIteration = 6;
  arrayOfColors = [];
  colorMap = [];
  shuffledColorMap = [];
  counter = -1;
  constructor() {}

// generuje kolor w postaci FF00FF i przechowuje w tablicy arrayOfColors
  generateColor(num: number) {
    this.arrayOfColors = [];
    for (let i = 0; i < num; i++) {
      const hexxx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
      let fullColor = '';
      for (let j = 0; j < 6; j++) {
        fullColor += hexxx[Math.round(Math.random() * (hexxx.length - 1))];
      }
      this.arrayOfColors.push(fullColor);
    }
  }

  // generuje tablicę parującą kolor z miejscem na drag n drop
  generateColorMap() {
    this.counter = -1;
    this.arrayOfColors.map((x) => {
      this.counter++;
      return this.colorMap.push([x, 'item' + this.counter]);
    })
  }

// mieszam elementy tablicy i zwracam pomieszaną kopie
  shuffleColorMap(arr): any[] {
    const copy = [];
    let n = arr.length;
    let i: number;
    while (n) {
      i = Math.floor(Math.random() * n--);
      copy.push(arr.splice(i, 1)[0])
    }
    return copy;
  }

  ngOnInit() {
    this.generateColor(this.numberOfIteration);
    this.generateColorMap();
    this.shuffledColorMap = this.shuffleColorMap(this.colorMap);
  }

  newColor () {
    this.generateColor(this.numberOfIteration);
    this.generateColorMap();
    this.shuffledColorMap = this.shuffleColorMap(this.colorMap);
  }

  successElement(num: number, data: any): void {
    console.log(data);
    const paragraphElement = document.createElement('p');
    paragraphElement.innerText = 'BinG0!';
    const squareElement = document.getElementById('square' + num);
    squareElement.appendChild(paragraphElement);

    const squareColorElement = document.getElementById('item' + num);
    squareColorElement.style.backgroundColor = 'green';
    squareColorElement.setAttribute('draggable', 'false');
  }

}





