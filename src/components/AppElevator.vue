<template>
  <div
    class="elevator"
    :style="{
      width: getElevatorWidth + 'vw',
      left: getElevatorPosition,
    }"
  >
    <div
      class="elevator__box"
      :style="{
        width: getBoxWidth,
        height: getBoxHeight + 'vh',
        bottom: getBoxFloor,
      }"
    >
      {{ activeFloor }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { PropSync, Prop } from "vue-property-decorator";

export default class AppElevator extends Vue {
  @Prop(Number)
  readonly elevatorsCount!: number;

  @Prop(Number)
  readonly elevatorNumber!: number;

  @Prop(Number)
  readonly floorsCount!: number;

  @PropSync("activeFloor", { type: Number })
  readonly activeFloor!: number;

  public get getElevatorWidth(): number {
    return 90 / this.elevatorsCount;
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
</script>

<style lang="scss" scoped>
.elevator {
  height: 100%;
  border: 1px solid #000;

  position: absolute;
  top: 0;

  &__box {
    position: absolute;
    background: #97cded;
    border: 4px solid #02a0da;
    box-sizing: border-box;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
