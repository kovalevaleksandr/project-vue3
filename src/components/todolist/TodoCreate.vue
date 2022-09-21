<template>
  <div class="create">
    <Input class="create__input" v-model="modelValue" @keydown.enter="addTodo" placeholder="Введите название задания"/>
    <Btn class="create__btn" :btnProps="btnProps" @click="addTodo">Добавить задание</Btn>
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
const modelValue = ref('');
const props = defineProps<{
  modelValue: string,
}>()

const emits = defineEmits(['throwTodo'])

function addTodo() {
 emits('throwTodo', modelValue.value)

  modelValue.value = ''
}
</script>
<style lang="scss" scoped>
.create {
  display: flex;
  width: 100%;

  &:focus-within {
    box-shadow: 0 0 10px 0.2rem rgba(24, 89, 255, 0.25);
  }

  &__input {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 8px 12px;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #464646;
    background: #FFFFFF;

    border: 1px solid #DBE0E9;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px 0 0 2px;

    &:focus::-webkit-input-placeholder {
      color: transparent
    }

    &:focus::-moz-placeholder {
      color: transparent
    }

    &:focus:-moz-placeholder {
      color: transparent
    }

    &:focus:-ms-input-placeholder {
      color: transparent
    }

    &:focus {
      background-color: #fff;
      border: 1px solid #1859FF;
      outline: 0;
    }
  }

  &__btn {
    background: #1859FF;
    border: 1px solid #1859FF;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0 2px 2px 0;
  }
}
</style>