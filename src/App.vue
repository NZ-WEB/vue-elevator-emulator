<template>
  <questions-layout v-if="!configured" @setConfig="setConfig" />
  <main-layout
    v-if="configured"
    :floors="+floors"
    :elevatorsCount="+elevators"
    :delay="+delay"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MainLayout from "./layouts/MainLayout/MainLayout.vue";
import QuestionsLayout from "./layouts/QuestionsLayout/QuestionsLayout.vue";
import { IConfig } from "./types/config.interface";

@Options({
  components: {
    MainLayout,
    QuestionsLayout,
  },
})
export default class App extends Vue {
  public elevators!: number;
  public floors!: number;
  public delay!: number;
  public configured = false;

  public setConfig({ delay, elevators, floors }: IConfig) {
    this.elevators = elevators;
    this.floors = floors;
    this.delay = delay;
    this.configured = true;
  }
}
</script>

<style lang="scss">
button {
  outline: none;
  border: none;
  cursor: pointer;
}

body {
  margin: 0px !important;
  padding: 0px !important;

  color: #370d85;
}

.blink {
  animation: blink 1s infinite;
}
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
