<template>
  <div class="create">
    <MyInput
        class="create__input"
        placeholder="Введите название задания"
        v-model="title"
        @keydown.enter="addTodo"
    />
    <Btn
        class="create__btn"
        @click="addTodo"
        name="add"
        color="#ffffff"
    >
      <span>Добавить задание</span>
    </Btn>
  </div>
</template>
<script setup lang="ts">
import MyInput from "@/components/UI/MyInput.vue";
import Btn from "@/components/UI/Button.vue";
import {ref} from "vue";
import {TodoItems} from "@/types";

const title = ref("");

const props = defineProps<{
items: TodoItems[]
}>();

const emits = defineEmits([
    "addTodo"
]);

function addTodo(): void {
    emits("addTodo", title.value);
    title.value = '';
}

// function create(): void {
//   emits('create', props.title)
// }
</script>
<style lang="scss" scoped>
.create {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:focus-within {
    box-shadow: 0 0 10px 0.2rem rgba(24, 89, 255, 0.25);
  }

  &__input {
    flex: 1;
    display: flex;
    align-items: center;
    padding: .9rem 1.2rem;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #464646;
    background: #ffffff;

    border: .1rem solid #dbe0e9;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px 0 0 2px;

    &:focus::-webkit-input-placeholder {
      color: transparent;
    }

    &:focus::-moz-placeholder {
      color: transparent;
    }

    &:focus:-moz-placeholder {
      color: transparent;
    }

    &:focus:-ms-input-placeholder {
      color: transparent;
    }

    &:focus {
      background-color: #fff;
      border: 1px solid #1859ff;
      outline: 0;
    }

    &::placeholder {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #B4BAC4;
    }
  }

  &__btn {
    background-color: #1859ff;
    border: 1px solid #1859ff;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0 2px 2px 0;
    padding: .7rem 1.6rem;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
  }
}
</style>
