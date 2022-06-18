<template>
  <TheBackgoundLayout :floors="10" :elevatorsCount="2" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import AppTouchButton from "./components/AppTouchButton.vue";
import TheBackgoundLayout from "./components/TheBackgoundLayout.vue";

@Options({
  components: {
    HelloWorld,
    AppTouchButton,
    TheBackgoundLayout,
  },
})
export default class App extends Vue {}
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
