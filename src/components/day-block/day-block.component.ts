import {Component, Input, OnInit} from '@angular/core';
import PlanItem from "../../model/PlanItem";

@Component({
  selector: 'app-day-block',
  templateUrl: './day-block.component.html',
  styleUrls: ['./day-block.component.css']
})
export class DayBlockComponent implements OnInit {

  @Input() date: Date;
  @Input() dayEvts: any;
  hovered: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  hover() {
    this.hovered = true;
  }

  unhover() {
    this.hovered = false;
  }

  getHoverStyle() {
    return this.hovered ? 'block' : 'none';
  }

  addItem() {
    this.dayEvts.push(new PlanItem('13:00', 'test'));
  }

  getFormatDate(style: string) {
    if(this.date){
      let dd: any = this.date.getDate();

      let mm: any = this.date.getMonth() + 1;
      const yyyy = this.date.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }

      switch (style) {
        case '-':
          return dd + '-' + mm + '-' + yyyy;
        case '/':
          return dd + '/' + mm + '/' + yyyy;
      }
    } else{
      return this.date
    }
  }
}
