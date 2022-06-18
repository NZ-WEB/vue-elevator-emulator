<template>
  <button
    class="touch-button"
    :class="{
      'touch-button_active': isActive || isWaitForElevator,
      blink: isWaitForElevator,
    }"
  ></button>
</template>

<script lang="ts" src="./AppTouchButton.ts"></script>
<style lang="scss" scoped src="./AppTouchButton.scss"></style>
