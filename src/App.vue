<template>
  <questions-layout v-if="!configured" @setConfig="setConfig" />
  <main-layout
    v-if="configured"
    :floors="+floors"
    :elevatorsCount="+elevators"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import AppTouchButton from "./components/AppTouchButton.vue";
import MainLayout from "./components/MainLayout.vue";
import QuestionsLayout from "./components/QuestionsLayout.vue";

@Options({
  components: {
    HelloWorld,
    AppTouchButton,
    MainLayout,
    QuestionsLayout,
  },
})
export default class App extends Vue {
  public elevators!: number;
  public floors!: number;
  public configured = false;

  public setConfig(config: number[]) {
    this.elevators = config[1];
    this.floors = config[0];
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
