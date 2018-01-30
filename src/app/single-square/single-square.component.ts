import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-square',
  templateUrl: './single-square.component.html',
  styleUrls: ['./single-square.component.css']
})
export class SingleSquareComponent implements OnInit {
  @Input() color;
  constructor() {}

  ngOnInit() {
    this.color = '#' + this.color;
    console.log(this.color);
  }




}
