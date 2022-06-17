<template>
  <div class="background">
    <div
      v-for="floor in floors"
      :key="floor"
      class="floor"
      :style="{ height: getHeight }"
    >
      <span class="floor__number">{{ floor }}</span>
      <app-touch-button />
    </div>
    <app-elevator
      :elevatorNumber="1"
      :elevatorsCount="2"
      :floorsCount="floors"
      :activeFloor="2"
    />
    <app-elevator
      :elevatorNumber="2"
      :elevatorsCount="2"
      :floorsCount="floors"
      :activeFloor="1"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import AppTouchButton from "./AppTouchButton.vue";
import AppElevator from "./AppElevator.vue";

@Options({
  components: {
    AppTouchButton,
    AppElevator,
  },
})
export default class TheBackgoundLayout extends Vue {
  @Prop(Number)
  readonly floors!: number;

  public get getHeight(): string {
    return 100 / this.floors + "vh";
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
