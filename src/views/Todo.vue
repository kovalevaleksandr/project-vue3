<template>
  <div class="todo">
    <div class="todo__container">
      <div class="todo__wrapper">
        <TodoCreate
            class="todo__create"
            title=""
            @addTodo="addTodo"
        />
        <TodoFilter
            class="todo__filter"
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

        <teleport to="body">
          <Modal
              v-model:show="dialogVisible">
            <TodoAbout
                :textShow="textShow"
            />
          </Modal>
        </teleport>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
import TodoCreate from "@/components/todolist/TodoCreate";
import TodoList from "@/components/todolist/TodoList";
import TodoFilter from "@/components/todolist/TodoFilter.vue";
import Modal from "@/components/UI/Modal.vue";
import TodoAbout from "@/components/todolist/TodoAbout.vue";
import {TodoItems} from "@/types"

const items = ref([]);
const filterActive = ref("all");
const dialogVisible = ref(false);
const modalEdit = ref(false);
const textShow = ref({title: '', date: '', completed: false});
const STORAGE_KEY = "todoList"

onMounted(() => {
  items.value = (JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
});

watch(
    items,
    (newValue) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
    },
    {deep: true}
);

const lastId = computed(() => {
    return  items.value.at(-1)?.id
});

const editTodo = () :void => {
  modalEdit.value = true;
}

function getFilter(id: string): void {
  filterActive.value = id;
}


const showInfo = (item: TodoItems): void => {
  dialogVisible.value = true;

  textShow.value.title = item.title;
  textShow.value.date = item.date;
  textShow.value.completed = item.completed;
}

//undefined не придет что делать
const saveTodo = (newTitle: string, item :TodoItems) :void => {
  console.log(newTitle)
  items.value.find((i) => i.id === item.id).title = newTitle;
}

const addTodo = (title: string): void => {
  items.value.push({
    id: lastId.value + 1 || 0,
    title,
    completed: false,
    date: Date(),
  });
}

const deleteTodo = (item: TodoItems): void => {
  items.value = items.value.filter((i) => i.id !== item.id);
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
}
</style>
