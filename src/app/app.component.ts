import {Component, OnInit} from '@angular/core';
import MockedMonth from "../model/MockedMonth";
import DayPlan from "../model/DayPlan";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedDay: any;
  selectedOneDay: DayPlan;
  monthPlan:Array<DayPlan> = MockedMonth.getMarchPlan();

  selectOneDay(evt){
    this.selectedDay = evt;
  }

  selectDay(item: DayPlan){
    this.selectedOneDay = item;
  }

  ngOnInit(): void {
  }

  constructor() {
  }

}
