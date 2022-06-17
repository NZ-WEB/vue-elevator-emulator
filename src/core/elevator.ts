import { EStatus } from "@/types/status.enum";

export class Elevator {
  constructor(private timeToMove: number = 3) {}

  private status: EStatus = EStatus.free;
  private activeFloor = 1;
  private target: number = this.activeFloor;

  public getStatus(): typeof this.status {
    return this.status;
  }

  public getTarget(): typeof this.target {
    return this.target;
  }

  public setTarget(floor: number): void {
    this.target = floor;
    this.status = EStatus.buzy;
    this.goToTarget();
  }

  public getActiveFloor(): number {
    return this.activeFloor;
  }

  private incrementFloor() {
    this.activeFloor++;
  }

  private decrementFloor() {
    this.activeFloor--;
  }

  private goToTarget() {
    if (this.target === this.activeFloor) {
      this.status = EStatus.free;
      return;
    }

    if (this.target > this.activeFloor) {
      this.moveOnNextFloor("up");
    } else {
      this.moveOnNextFloor("down");
    }
  }

  private moveOnNextFloor(type: "up" | "down") {
    setTimeout(() => {
      if (type === "up") {
        this.incrementFloor();
      } else {
        this.decrementFloor();
      }
      console.log(this.target, "target");
      console.log(this.activeFloor, "activeFloor");

      this.goToTarget();
    }, this.timeToMove * 1000);
  }
}
