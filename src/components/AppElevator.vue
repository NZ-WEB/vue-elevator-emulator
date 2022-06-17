<template>
  <div
    class="elevator"
    :style="{ width: getElevatorWidth + 'vw', left: getElevatorPosition }"
  >
    <div class="elevator__box"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class AppElevator extends Vue {
  @Prop(Number)
  readonly elevatorsCount!: number;

  @Prop(Number)
  readonly elevatorNumber!: number;

  @Prop(Number)
  readonly floorsCount!: number;

  public get getElevatorWidth(): number {
    return 90 / this.elevatorsCount;
  }

  public get getElevatorPosition(): string {
    return (
      this.elevatorNumber * this.getElevatorWidth - this.getElevatorWidth + "vw"
    );
  }

  public get getBox(): number {
    return 90 / this.elevatorsCount;
  }
}
</script>

<style lang="scss" scoped>
.elevator {
  height: 100%;
  border: 1px solid #000;

  position: absolute;
  top: 0;
}
</style>
