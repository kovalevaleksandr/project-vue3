<template>
  <div class="list">
<TodoItem
    @deleteTodo="deleteTodo"
    class="list__item"
    v-for="item of props.items"
    :key="item.id"
    :item="item"
/>
  </div>
</template>
<script setup lang="ts">
import TodoItem from "@/components/todolist/TodoItem"
const emits = defineEmits(['deleteTodo', 'post'])

function deleteTodo() {
  emits('deleteTodo', 'post')
}


const props = defineProps<{
  items: object[]
}>()

console.log(props.items)
</script>