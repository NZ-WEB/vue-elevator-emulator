import { EStatus } from "@/types/status.enum";

export class Elevator {
  constructor(private timeToMove: number, private delayTime: number) {}

  private status: EStatus = EStatus.free;
  private activeFloor = 1;
  private delay = false;
  private target: number = this.activeFloor;

  public getStatus(): typeof this.status {
    return this.status;
  }

  public getTarget(): typeof this.target {
    return this.target;
  }

  public getDelay(): typeof this.delay {
    return this.delay;
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

  private setDelay(delayTime: number, cb: () => void) {
    this.delay = true;
    setTimeout(() => {
      cb();
      this.delay = false;
    }, delayTime * 1000);
  }

  private goToTarget() {
    if (!this.target || this.target === this.activeFloor) {
      this.setDelay(this.delayTime, () => {
        this.status = EStatus.free;
      });
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

      this.goToTarget();
    }, this.timeToMove * 1000);
  }
}
