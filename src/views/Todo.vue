<template>
  <section class="todo">
    <div class="container">
      <TodoCreate class="todo__create" @throwTodo="addTodo" :model-value="rrr"/>
      <TodoFilter
        class="todo__filter"
        :filterBtn="filterBtn"
        @getFilter="getFilter"
        :filterActive="filterActive"
      />
      <TodoList
        @deleteTodo="deleteTodo"
        :items="items"
        @showInfo="showInfo"
        :filterActive="filterActive"
      />
      <Modal v-model:show="dialogVisible">{{ dataModal }}</Modal>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import TodoCreate from "@/components/todolist/TodoCreate";
import TodoList from "@/components/todolist/TodoList";
import TodoFilter from "@/components/todolist/TodoFilter.vue";
import Modal from "@/components/UI/Modal.vue";

const items = ref([
  {id: 0, title: "hi", completed: false, date: "Thu Sep 22 2022 10:27:33 GMT+0300 (Москва, стандартное время)",},
  {id: 1, title: "hello", completed: false, date: "Thu Sep 22 2022 10:27:33 GMT+0300 (Москва, стандартное время)",},
]);


const rrr = ref('')
const filterActive = ref("all");
const filterBtn = ref([
  { id: "all", name: "Все задания" },
  { id: "active", name: "Активные задания" },
  { id: "completed", name: "Выполненные задания" },
]);
function getFilter(id: string): void {
  filterActive.value = id;
}
const dialogVisible = ref(false);
const dataModal = ref("");

function showInfo(text: string) {
  dialogVisible.value = true;
  dataModal.value = text;
}

function addTodo(title: string): void {
  items.value.push({
    id: (lastId.value + 1  || 0),
    title,
    completed: false,
    date: Date(),
  });
}

function deleteTodo(id: number): object[] {
  console.log(items.value)
  items.value = items.value.filter((i) => i.id !== id);
  return items.value;
}

let lastId = computed(() => {
  console.log(items.value[items.value.length - 1])
  // return items.value.at(-1)?.id;
  return items.value[items.value.length - 1]?.id;

});
</script>
<style scoped lang="scss">
.container {
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.todo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__filter {
    align-self: flex-start;
    margin-bottom: 2rem;
  }

  &__create {
    margin-bottom: 4rem;
  }
}
</style>
