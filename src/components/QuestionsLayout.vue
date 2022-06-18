<template>
  <div>
    <label for="floors">
      <input type="text" name="floors" v-model="floors" />
    </label>
    <label for="elevators">
      <input type="text" name="elevators" v-model="elevators" />
    </label>
    <button @click="handleSubmit">Сконфигурировать</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Emit } from "vue-property-decorator";

export default class QuestionsLayout extends Vue {
  @Emit("setConfig")
  setConfig() {
    return [this.floors, this.elevators];
  }
  public floors = 5;
  public elevators = 1;

  public handleSubmit() {
    this.$emit("setConfig", this.setConfig());
  }
}
</script>
