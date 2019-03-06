import DayPlan from "./DayPlan";
import PlanItem from "./PlanItem";

export default class MockedMonth {
  static marchPlan : Array<DayPlan> = [];

  static getMarchPlan(){
    for ( let i = 0; i < 31; i++){
      const dayPlan = new DayPlan(new Date(2019, 2, i+1));
      dayPlan.events.push(new PlanItem(`08:${i}`, 'Buy food'));
      dayPlan.events.push(new PlanItem(`09:${i}`, 'Buy76576 envelope'));
      dayPlan.events.push(new PlanItem(`10:${i}`, 'Buy76576 envelope'));
      MockedMonth.marchPlan.push(dayPlan);
    }

    return MockedMonth.marchPlan;
  }
}
