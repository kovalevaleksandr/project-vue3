<template>
  <div class="create">
    <Input class="create__input" v-model="modelValue" placeholder="Введите название задания"/>
    <Btn class="create__btn" :btnProps="btnProps" @click="emit">Добавить задание</Btn>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import Input from "@/components/UI/Input.vue";
import Btn from "@/components/UI/Button.vue"
const btnProps = ref({
  name: "add",
  color: "white",
})
defineProps({
  modelValue: {
    type: [String, Number]
  },
})
const emit = defineEmits(['addTodo'])
</script>
<style lang="scss" scoped>
.create {
  display: flex;
  width: 100%;

  &__input {
    flex: 1;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #B4BAC4;
    background: #FFFFFF;
    border: 1px solid #DBE0E9;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px 0 0 2px;
  }
}
</style>