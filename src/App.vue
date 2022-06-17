<template>
  <TheBackgoundLayout :floors="5">
    <template v-slot:elevators> elevators </template>

    <template v-slot:buttons>
      <app-touch-button isActive />
      <app-touch-button />
    </template>
  </TheBackgoundLayout>
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
}
</style>
