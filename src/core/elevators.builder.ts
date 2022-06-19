import { Elevator } from "./elevator";

export default class ElevatorBuilder {
  private elevatorsArr: Elevator[] = [];

  constructor(
    private elevatorsCount: number,
    private timeToMove: number = 1,
    private delay: number
  ) {}

  build(): Elevator[] {
    for (let i = 0; i < this.elevatorsCount; i++) {
      this.elevatorsArr.push(new Elevator(this.timeToMove, this.delay));
    }

    return this.elevatorsArr;
  }
}
