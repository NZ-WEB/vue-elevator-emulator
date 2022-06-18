import { Vue, Options } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import AppTouchButton from "../../components/AppTouchButton.vue";
import AppElevator from "../../components/AppElevator.vue";
import { Elevator } from "@/core/elevator";
import ElevatorBuilder from "@/core/elevators.builder";
import { EStatus } from "@/types/status.enum";

@Options({
  components: {
    AppTouchButton,
    AppElevator,
  },
})
export default class MainLayout extends Vue {
  @Prop(Number)
  readonly floors!: number;

  @Prop(Number)
  readonly elevatorsCount!: number;

  @Prop(Number)
  readonly delay!: number;

  public floorsCallsTurn: number[] = [];
  public elevatorsArr: Elevator[] = [];

  public get getHeight(): string {
    return 100 / this.floors + "vh";
  }

  public isWaitForElevator(floor: number): boolean {
    return !!this.elevatorsArr.find(
      (elevator) =>
        elevator.getTarget() === floor && !(elevator.getActiveFloor() === floor)
    );
  }

  public getCurrentFloor(floors: number, floor: number): number {
    return floors - floor + 1;
  }

  private get findFreeElevator(): Elevator | undefined {
    return this.elevatorsArr.find(
      (elevator) => elevator.getStatus() === EStatus.free
    );
  }

  public hasActiveFloor(floor: number): boolean {
    return !!this.floorsCallsTurn.find((item) => item === floor);
  }

  public addActiveFloor(floor: number): void {
    this.floorsCallsTurn.push(floor);
  }

  created() {
    this.elevatorsArr = new ElevatorBuilder(
      this.elevatorsCount,
      1,
      this.delay
    ).build();
  }

  @Watch("floorsCallsTurn", { immediate: true, deep: true })
  onFloorsChange() {
    if (!this.floorsCallsTurn.length) return;

    const chooseFreeElevator = () => {
      if (!this.findFreeElevator) {
        setTimeout(() => {
          chooseFreeElevator();
        }, 1000);
      } else {
        this.findFreeElevator.setTarget(
          this.floorsCallsTurn[this.floorsCallsTurn.length - 1]
        );
        this.floorsCallsTurn.pop();
      }
    };

    chooseFreeElevator();
  }
}
