<template>
  <div class="background">
    <div
      v-for="floor in floors"
      :key="floor"
      class="floor"
      :style="{ height: getHeight }"
    >
      <span class="floor__number">{{ getCurrentFloor(floors, floor) }}</span>
      <app-touch-button
        :isActive="hasActiveFloor(getCurrentFloor(floors, floor))"
        @click="addActiveFloor(getCurrentFloor(floors, floor))"
        :isWaitForElevator="isWaitForElevator(getCurrentFloor(floors, floor))"
      />
    </div>

    <app-elevator
      v-for="(elevator, index) in elevatorsArr"
      :key="index"
      :elevatorNumber="index"
      :elevatorsCount="elevatorsArr.length"
      :activeFloor="elevator.getActiveFloor()"
      :floorsCount="floors"
      :hasDelay="elevator.getDelay()"
      :target="elevator.getTarget()"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import AppTouchButton from "./AppTouchButton.vue";
import AppElevator from "./AppElevator.vue";
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
        !!(elevator.getTarget() === floor) &&
        !(elevator.getActiveFloor() === floor)
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

    const choiseFreeElevator = () => {
      if (!this.findFreeElevator) {
        setTimeout(() => {
          choiseFreeElevator();
        }, 1000);
      } else {
        this.findFreeElevator.setTarget(
          this.floorsCallsTurn[this.floorsCallsTurn.length - 1]
        );
        this.floorsCallsTurn.pop();
      }
    };

    choiseFreeElevator();
  }
}
</script>

<style lang="scss" scoped>
.background {
  background: #fff;
  width: 100vw;
  height: 100vh;
}

.floor {
  border: 1px solid #000;
  padding: 1em;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &__number {
    height: 100%;
    font-size: 1.2em;
  }
}
</style>
