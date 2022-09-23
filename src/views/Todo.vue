<template>
  <div class="todo">
    <div class="todo__container">
      <div class="todo__wrapper">
        <TodoCreate
          class="todo__create"
          @throwTodo="addTodo"
          v-model="title"
        />
        <TodoFilter
          class="todo__filter"
          :filterBtn="filterBtn"
          @getFilter="getFilter"
          :filterActive="filterActive"
        />
        <TodoList
          @deleteTodo="deleteTodo"
          @showInfo="showInfo"
          @saveTodo="saveTodo"
          @editTodo="editTodo"
          :items="items"
          :filterActive="filterActive"
        />
        <Modal v-model:show="dialogVisible" class="about">
          <div class="about__title">
            <h2>Подробнее:</h2>
          </div>
          <div class="about__body">
            <span>Название задачи: {{ textShow.title }}</span>
            <span>Добавлена: {{ textShow.date }} </span>
            <span>Выполнение:
              <span v-if="textShow.completed">да</span>
              <span v-else>нет</span>
            </span>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import TodoCreate from "@/components/todolist/TodoCreate";
import TodoList from "@/components/todolist/TodoList";
import TodoFilter from "@/components/todolist/TodoFilter.vue";
import Modal from "@/components/UI/Modal.vue";

const title = ref("");
const items = ref([]);
const filterActive = ref("all");
const filterBtn = ref([
  { id: "all", name: "Все задания" },
  { id: "active", name: "Активные задания" },
  { id: "completed", name: "Выполненные задания" },
]);
const dialogVisible = ref(false);
const STORAGE_KEY = "todoList"

onMounted(() => {
  items.value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") ;
});

function editTodo() {
  dialogVisible.value = true;
}

watch(
  items,
  (newValue) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
  },
  { deep: true }
);

let lastId = computed(() => {
  // return items.value.at(-1)?.id;
  return items.value[items.value.length - 1]?.id;
});

function getFilter(id: string): void {
  filterActive.value = id;
}

function showInfo(info) {
  dialogVisible.value = true;
  textShow.value.title = info.title;
  textShow.value.date = info.date;
  textShow.value.completed = info.completed;
}

const textShow = ref({title:'', date: '', completed:''});

//undefined не придет что делать
function saveTodo(id: number, newText: string) {
  items.value.find((i) => i.id === id).title = newText;
}

function addTodo(title): void {
  items.value.push({
    id: lastId.value + 1 || 0,
    title,
    completed: false,
    date: Date(),
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value));
}

function deleteTodo(id: number): object[] {
  items.value = items.value.filter((i) => i.id !== id);
  return items.value;
}
</script>
<style scoped lang="scss">
.todo {
  margin-top: 6rem;
  background: #fafafa;

  &__container {
    max-width: 124rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__filter {
    align-self: flex-start;
    margin-bottom: 2rem;
  }

  &__create {
    margin-bottom: 4rem;
  }

  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__body {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
