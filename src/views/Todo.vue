<template>
  <section class="todo">
    <div class="container">
      <TodoCreate :inputValue="inputValue" @click="addTodo" />
      <TodoList :items="items" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { usePosts } from "@/hooks/usePosts";
import TodoCreate from "@/components/todolist/TodoCreate.vue";
import TodoList from "@/components/todolist/TodoList.vue";

const inputValue = ref("");
const items = ref([]);
function addTodo() {
  console.log('add');
}
</script>
<style scoped lang="scss">
.container {
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.my-components {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
</style>
