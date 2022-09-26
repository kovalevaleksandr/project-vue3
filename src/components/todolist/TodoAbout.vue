<template>
  <div class="about">
    <div class="about__header">
      <span>Подробнее о задаче:</span>
    </div>
    <div class="about__body">
      <div class="about__title">
        <span>Название задачи: {{ textShow.title }}</span>
      </div>
      <div class="about__date">
        <span>Время задачи: {{ textShow.date }} </span>
      </div>
      <div class="about__completed">
        <span v-if="textShow.completed">Выполнение: выполнена!</span>
        <span v-else>Выполнение: не выполнена</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  textShow: object,
}>()
</script>
<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  &__body {
    display: flex;
    flex-direction: column;
  }

  &__header {
    align-self: center;
  }
}
</style>