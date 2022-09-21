<template>
  <section class="todo">
    <div class="container">
      <TodoCreate :modelValue="modelValue" @throwTodo="addTodo"/>
      <TodoList @deleteTodo="deleteTodo" :items="items" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { usePosts } from "@/hooks/usePosts";
import TodoCreate from "@/components/todolist/TodoCreate.vue";
import TodoList from "@/components/todolist/TodoList.vue";



const items = ref([
  {id: 0, name: 'Sasha'},
  {id: 1, name: 'Dasha'}
]);
function addTodo(modelValue): void {
items.value.push({id: 2, name: modelValue.value})
}
function deleteTodo(id:number): object[] {
  console.log(id)
  items.value = items.value.filter(i=> i.id !== id)
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
