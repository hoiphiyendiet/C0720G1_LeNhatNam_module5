import {Component, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-cha-con',
  templateUrl: './cha-con.component.html',
  styleUrls: ['./cha-con.component.scss']
})
export class ChaConComponent implements OnChanges{

  @Input() count: number;

  ngOnChanges(changes: SimpleChanges) {

    for (let property in changes) {
      if (property === 'count') {
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
        console.log('firstChange:', changes[property].firstChange);
      }
    }
  }

}
