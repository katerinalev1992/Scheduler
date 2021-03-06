import {Component, Input, OnInit} from '@angular/core';
import DayPlan from "../../model/DayPlan";
import PlanItem from "../../model/PlanItem";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {AddEventComponent} from "../add-event/add-event.component";

@Component({
  selector: 'app-item-block',
  templateUrl: './item-block.component.html',
  styleUrls: ['./item-block.component.css']
})
export class ItemBlockComponent implements OnInit {

  @Input() date: Date;
  @Input() dayEvts: any;
  hovered: boolean = false;

  constructor(public dialog: MatDialog) {
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
    // this.dayEvts.push(new PlanItem('13:00', 'test'));
    this.dialog.open(AddEventComponent, <MatDialogConfig>{
      width: '900px',
      data: {},
      disableClose: true
    });
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
