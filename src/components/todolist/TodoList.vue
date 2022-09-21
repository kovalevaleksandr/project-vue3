<template>
  <div class="list">
<TodoItem
    class="list__item"
    v-for="item in items"
    :key="item.id"
    :item="item"
/>
  </div>
</template>
<script setup lang="ts">
import TodoItem from "@/components/todolist/TodoItem"
const props = defineProps<{
  items: object[]
}>()

</script>