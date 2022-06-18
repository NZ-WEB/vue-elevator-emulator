<template>
  <div>
    <label for="floors">
      <input type="text" name="floors" v-model="floors" />
    </label>
    <label for="elevators">
      <input type="text" name="elevators" v-model="elevators" />
    </label>
    <label for="delay">
      <input type="text" name="delay" v-model="delay" />
    </label>
    <button @click="handleSubmit">Сконфигурировать</button>
  </div>
</template>

<script lang="ts">
import { IConfig } from "@/types/config.interface";
import { Vue } from "vue-class-component";
import { Emit } from "vue-property-decorator";

export default class QuestionsLayout extends Vue {
  @Emit("setConfig")
  setConfig(): IConfig {
    return {
      elevators: this.elevators,
      floors: this.floors,
      delay: this.delay,
    };
  }

  public floors = 5;
  public elevators = 1;
  public delay = 3;

  public handleSubmit() {
    this.$emit("setConfig", this.setConfig());
  }
}
</script>
