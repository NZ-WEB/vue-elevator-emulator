<template>
  <div class="background">
    <div
      v-for="floor in floors"
      :key="floor"
      class="floor"
      :style="{ height: getHeight }"
    >
      <span class="floor__number">{{ floor }}</span>
      <app-touch-button
        :isActive="hasActiveFloor(floor)"
        @click="addActiveFloor(floor)"
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
import { Prop } from "vue-property-decorator";
import AppTouchButton from "./AppTouchButton.vue";
import AppElevator from "./AppElevator.vue";
import { Elevator } from "@/core/elevator";
import ElevatorBuilder from "@/core/elevators.builder";

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

  public hasActiveFloor(floor: number): boolean {
    return !!this.floorsCallsTurn.find((item) => item === floor);
  }

  public addActiveFloor(floor: number): void {
    this.floorsCallsTurn.push(floor);
  }

  mounted() {
    console.log(this.elevatorsArr[0]);
    this.elevatorsArr[0].setTarget(5);
    console.log(this.elevatorsArr[0]);
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
