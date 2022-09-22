<template>
  <div class="list">
    <div class="list--empty" v-if="items.length === 0"><p>Нет задач!</p></div>

    <TodoItem
      class="list__item"
      v-for="item of filterElement"
      :key="item.id"
      :item="item"
      @showInfo.self="showInfo"
      @deleteTodo="deleteTodo"
      v-else
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import TodoItem from "@/components/todolist/TodoItem";
interface filterId {
  [key: string]: any
}
const emits = defineEmits(["deleteTodo", "showInfo"]);
const props = defineProps<{
  items: filterId[];
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
``;
function showInfo(i: string) {
  emits("showInfo", i);
}
</script>
