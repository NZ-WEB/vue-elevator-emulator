import { Elevator } from "./elevator";

export default class ElevatorBuilder {
  private elevatorsArr: Elevator[] = [];

  constructor(private elevatorsCount: number, private timeToMove: number = 1) {}

  build(): Elevator[] {
    for (let i = 0; i < this.elevatorsCount; i++) {
      this.elevatorsArr.push(new Elevator(this.timeToMove));
    }

    return this.elevatorsArr;
  }
}
