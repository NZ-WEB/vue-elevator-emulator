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
        :isActive="hasActiveFloor(floor)"
        @click="addActiveFloor(getCurrentFloor(floors, floor))"
      />
    </div>

    <app-elevator
      v-for="(elevator, index) in elevatorsArr"
      :key="index"
      :elevatorNumber="index"
      :elevatorsCount="elevatorsArr.length"
      :activeFloor="elevator.getActiveFloor()"
      :floorsCount="floors"
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
export default class TheBackgoundLayout extends Vue {
  @Prop(Number)
  readonly floors!: number;

  @Prop(Number)
  readonly elevatorsCount!: number;

  public floorsCallsTurn: number[] = [];
  public elevatorsArr: Elevator[] = new ElevatorBuilder(3, 1).build();

  public get getHeight(): string {
    return 100 / this.floors + "vh";
  }

  public getCurrentFloor(floors, floor): number {
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

  @Watch("floorsCallsTurn", { immediate: true, deep: true })
  onFloorsChange(val: number[], oldVal: number[]) {
    if (!this.floorsCallsTurn.length) return;

    if (!this.findFreeElevator) {
      console.log("Все лифты заняты");
    } else {
      this.findFreeElevator.setTarget(
        this.floorsCallsTurn[this.floorsCallsTurn.length - 1]
      );
      this.floorsCallsTurn.pop();
      console.log("Уладили и назначили задачу лифту", this.floorsCallsTurn);
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  background: #eae1ef;
  width: 100vw;
  height: 100vh;
}

.floor {
  border: 1px solid #b8afc9;
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
