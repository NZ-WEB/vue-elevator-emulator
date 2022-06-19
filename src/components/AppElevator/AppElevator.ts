import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class AppElevator extends Vue {
  @Prop(Number)
  readonly elevatorsCount!: number;
  @Prop(Number)
  readonly elevatorNumber!: number;
  @Prop(Number)
  readonly floorsCount!: number;
  @Prop(Boolean)
  readonly hasDelay!: boolean;
  @Prop(Number)
  readonly target!: number;
  @Prop(Number)
  readonly activeFloor!: number;

  public get getElevatorWidth(): number {
    return 90 / this.elevatorsCount;
  }

  public get getTargetDestination() {
    if (this.target > this.activeFloor) {
      return "↑";
    } else if (this.target < this.activeFloor) {
      return "↓";
    }
    return "";
  }

  public get getElevatorPosition(): string {
    return this.elevatorNumber * this.getElevatorWidth + "vw";
  }

  public get getBoxHeight(): number {
    return 100 / this.floorsCount;
  }

  public get getBoxWidth(): string {
    return this.getElevatorWidth * 0.8 + "vw";
  }

  public get getBoxFloor(): string {
    return (this.activeFloor - 1) * this.getBoxHeight + "vh";
  }
}
