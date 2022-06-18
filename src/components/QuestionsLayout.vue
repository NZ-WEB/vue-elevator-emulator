<template>
  <div class="container">
    <div class="questions-form">
      <h4>Конфигуратор</h4>
      <label for="floors">
        Колличество этажей
        <input type="text" name="floors" v-model="floors" />
      </label>
      <label for="elevators">
        Колличество лифтов
        <input type="text" name="elevators" v-model="elevators" />
      </label>
      <label for="delay">
        Время задержки на этаже
        <input type="text" name="delay" v-model="delay" />
      </label>
      <button @click="handleSubmit">Сконфигурировать</button>
    </div>
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

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.questions-form {
  border: 1px solid #000;
  padding: 1em;
  width: 70vw;

  display: flex;
  flex-direction: column;

  label {
    padding: 0.5em 0;
  }

  input {
    width: 100%;
    display: block;
  }

  button {
    color: #fff;
    background: #000;
    padding: 0.5em;
  }
}
</style>
