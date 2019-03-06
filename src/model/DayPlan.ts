import PlanItem from "./PlanItem";

export default class DayPlan {
  id: number;
  date: Date;
  events: Array<PlanItem>;

  constructor(date: Date){
    this.id = Date.now();
    this.date = date;
    this.events = [];
  }
}
