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

<script src="./MainLayout.ts"></script>
<style lang="scss" src="./MainLayout.scss" scoped></style>
