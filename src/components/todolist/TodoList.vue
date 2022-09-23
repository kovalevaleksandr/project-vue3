<template>
  <div class="list">
    <div
        class="list--empty"
         v-if="emptyTodo()">
      <p>Нет таковых задач!</p>
    </div>
    <TodoItem
      class="list__item"
      v-for="item of filterElement"
      :key="item.id"
      :item="item"
      @showInfo="showInfo"
      @deleteTodo="deleteTodo"
      @editTodo="editTodo"
      @saveTodo="saveTodo"
      v-else
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import TodoItem from "@/components/todolist/TodoItem";

const emits = defineEmits(["deleteTodo", "showInfo", "editTodo", 'saveTodo']);
const props = defineProps<{
  items: object[];
  filterActive: string;
}>();



let filterElement = computed(() => {
  switch (props.filterActive) {
    case "all":
      return props.items;
    case "active":
      return props.items.filter((i) => !i.completed);
    case "completed":
      return props.items.filter((i) => i.completed);
  }
});

function deleteTodo(id: number) {
  emits("deleteTodo", id);
}

function editTodo() {
  emits("editTodo")
}
function saveTodo(id: number, newTitle: string): void {
  emits('saveTodo', id, newTitle)
}

function showInfo(info) {
  console.log('info', info)
  emits("showInfo", info);
}

function emptyTodo():boolean {
  return filterElement.value?.length === 0
}

</script>
<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
