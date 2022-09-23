<template>
  <div
    class="item"
    :class="{ 'item--completed': props.item.completed }"
    @click.self="showInfo"
  >
    <TodoCheck
      class="item__check"
      v-model="props.item.completed"
      :checked="props.item.completed"
    />
    <TodoInput
      class="item__text"
      :class="{ 'item__text--completed': props.item.completed }"
      :value="props.item.title"
      :readonly="stateEdit"
      @click.self="showInfo"
    />

    <TodoEdit class="item__edit" @editTodo="editTodo" v-if="stateEdit" />
    <TodoSave class="item__save" @saveTodo="saveTodo" v-else />

    <TodoDelete class="item__delete" @click.stop="deleteTodo" />
  </div>
</template>
<script setup lang="ts">
import TodoCheck from "@/components/todolist/TodoCheck.vue";
import TodoEdit from "@/components/todolist/TodoEdit.vue";
import TodoDelete from "@/components/todolist/TodoDelete.vue";
import TodoSave from "@/components/todolist/TodoSave.vue";
import TodoInput from "@/components/UI/MyInput.vue";
import { ref } from "vue";
const emits = defineEmits(["deleteTodo", "showInfo", "editTodo", "saveTodo"]);

const stateEdit = ref(true);

const props = defineProps<{
  item: object;
}>();
function showInfo(): void {
  emits("showInfo", {title: props.item.title, date: props.item.date, completed: props.item.completed});
}

function editTodo(): void {
  stateEdit.value = false;
  emits("editTodo");
}
function saveTodo(): void {
  stateEdit.value = true;
  emits("saveTodo", props.item.id, "Новое значение");
}

function deleteTodo(): void {
  emits("deleteTodo", props.item.id);
}
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 1.6rem;
  margin-bottom: 1rem;
  background: #ffffff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  cursor: pointer;
  position: relative;

  &--completed {
    opacity: 0.4;

    .item__text {
      text-decoration-line: line-through;
      color: #464646;
    }
  }

  &:not(.item--completed):hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    background: #f0f2f6;
    border-radius: 2px 2px 0 0;

    .item__text {
      font-weight: 500;
      color: #1a73e8;
      background: #f0f2f6;
    }
  }

  &__check {
    margin-right: 2.4rem;
  }

  &__save {
    margin-right: 2.4rem;
  }

  &__text {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    margin-right: 2.4rem;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #464646;
    outline: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
  &__edit {
    margin-right: 2.4rem;
  }
  &__delete {
  }
}
</style>
