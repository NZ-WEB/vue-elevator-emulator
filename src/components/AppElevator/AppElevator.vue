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
      :class="{ blink: hasDelay }"
      :style="{
        width: getBoxWidth,
        height: getBoxHeight + 'vh',
        bottom: getBoxFloor,
      }"
    >
      <span class="elevator__floor-window">
        {{ activeFloor }} {{ getTargetDestination }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" src="./AppElevator.ts"></script>
<style lang="scss" scoped src="./AppElevator.scss"></style>
