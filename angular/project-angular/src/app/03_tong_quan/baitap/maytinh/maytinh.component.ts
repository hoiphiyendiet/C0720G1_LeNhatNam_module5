import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-maytinh',
  templateUrl: './maytinh.component.html',
  styleUrls: ['./maytinh.component.scss']
})
export class MaytinhComponent implements OnInit {
  number1: number;
  number2: number;
  operator = '+';
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }


  changeNumber1(value: any): number {
    return this.number1 = Number(value);
  }

  changeNumber2(value: any): number {
    return this.number2 = Number(value);
  }

  selectChange(value: any) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        break;
    }
  }
}
