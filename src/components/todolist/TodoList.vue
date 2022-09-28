<template>
  <div class="list">
    <div
        class="list--empty"
        v-if="emptyTodo()">
      <p>Нет таковых задач!</p>
    </div>
    <transition-group
        class="list__wrapper"
        name="list"
        tag="div"
        v-else
    >
    <TodoItem
        class="list__item"
        v-for="item of filterElement"
        :key="item.id"
        :item="item"
        @showInfo="showInfo(item)"
        @deleteTodo="deleteTodo(item)"
        @editTodo="editTodo"
        @saveTodo="saveTodo($event, item)"

    />
    </transition-group>
  </div>
</template>
<script setup lang="ts">
import {computed} from "vue";
import TodoItem from "@/components/todolist/TodoItem.vue";
import {TodoItems} from "@/types"

const emits = defineEmits([
  "deleteTodo", "showInfo", "editTodo", 'saveTodo'
]);

const props = defineProps<{
  items: TodoItems[];
  filterActive: string;
  postCurrent: TodoItems[];
}>();

const saveTodo = (newTitle: string, item: TodoItems): void => {
  console.log('list', newTitle, item)
  emits('saveTodo', newTitle, item)
}

const filterElement = computed(() => {
  switch (props.filterActive) {
    case "all":
      return props.postCurrent;
    case "active":
      return props.postCurrent.filter((i) => !i.completed);
    case "completed":
      return props.postCurrent.filter((i) => i.completed);
  }
});

function deleteTodo(item: TodoItems): void {
  emits("deleteTodo", item);
}

const showInfo = (item: TodoItems): void => {
  emits("showInfo", item);
}

function editTodo() {
  emits("editTodo")
}

const emptyTodo = (): boolean => {
  return filterElement.value?.length === 0
}
</script>
<style scoped lang="scss">
.list {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 10px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__item {
    display: flex;
    width: 100%;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all .3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
