<template>
  <button
    class="touch-button"
    :class="{ 'touch-button_active': isActive }"
  ></button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class AppTouchButton extends Vue {
  @Prop(Boolean)
  readonly isActive!: boolean;
}
</script>

<style lang="scss" scoped>
.touch-button {
  background: rgb(0, 131, 11);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #000;

  &_active {
    background: rgb(255, 153, 0);
  }
}
</style>
