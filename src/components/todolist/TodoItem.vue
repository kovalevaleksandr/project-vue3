<template>

  <div class="item">
    <TodoCheck class="item__check"/>
    <div class="item__text">
      {{props.item.name}}
    </div>
    <TodoEdit class="item__edit"/>
    <TodoDelete @click="deleteTodo" class="item__delete"/>
  </div>

</template>
<script setup lang="ts">
import TodoCheck from "@/components/todolist/TodoCheck.vue";
import TodoEdit from "@/components/todolist/TodoEdit.vue";
import TodoDelete from "@/components/todolist/TodoDelete.vue";

function deleteTodo() {
  emits('deleteTodo', 'post')
}
const emits = defineEmits(['deleteTodo', 'post'])
const props = defineProps<{
  item: object,
}>()
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: start;
  padding: 2rem 1.6rem;

  &__check {
    margin-right: 2.4rem;
  }

  &__text {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    margin-right: 2.4rem;
  }
  &__edit {
    margin-right: 2.4rem;
  }
  &__delete {
  }
}
</style>

