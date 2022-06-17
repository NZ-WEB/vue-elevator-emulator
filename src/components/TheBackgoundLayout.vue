<template>
  <div class="background">
    <div
      v-for="floor in floors"
      :key="floor"
      class="floor"
      :style="{ height: getHeight }"
    >
      {{ floor }}
    </div>
    <div class="elevators">
      <slot name="elevators" />
    </div>
    <slot name="buttons" />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

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
}
</style>
