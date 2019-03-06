export default class PlanItem {
  id: number;
  time: string;
  description :string;

  constructor(time: string, description: string){
    this.id = Date.now();
    this.time = time;
    this.description = description;
  }
}
