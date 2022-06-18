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

<script src="./QuestionsLayout.ts"></script>
<style lang="scss" scoped src="./QuestionsLayout.scss"></style>
