import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chonmau',
  templateUrl: './chonmau.component.html',
  styleUrls: ['./chonmau.component.scss']
})

export class ChonmauComponent implements OnInit {
  background = '#00e067';

  constructor() {
  }

  ngOnInit() {
  }

  onChange(value) {
    this.background = value;
  }

}
