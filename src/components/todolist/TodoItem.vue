<template>
  <div class="item">
    <TodoCheck
        class="item__check"
        v-model="props.item.completed"
        :checked="props.item.completed"
    />
    <div
        class="item__text"
         @click="showInfo">
      {{ props.item.id + 1 }} / {{ props.item.title }}
    </div>
    <TodoEdit
        class="item__edit"/>
    <TodoDelete
        class="item__delete"
        @click.stop="deleteTodo"/>
  </div>

</template>
<script setup lang="ts">
import TodoCheck from "@/components/todolist/TodoCheck.vue";
import TodoEdit from "@/components/todolist/TodoEdit.vue";
import TodoDelete from "@/components/todolist/TodoDelete.vue";
const emits = defineEmits(['deleteTodo', 'showInfo'])
const props = defineProps<{
  item: object,
}>()
function showInfo() {
  emits('showInfo', props.item.title)
}

function deleteTodo() {
  emits('deleteTodo', props.item.id)
}


</script>
<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: start;
  padding: 2rem 1.6rem;
  margin-bottom: 1rem;
  background: #FFFFFF;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    background: #F0F2F6;
    border-radius: 2px 2px 0 0;
  }

  &:hover &__text {
    font-weight: 500;
    color: #1a73e8;
  }

  &__check {
    margin-right: 2.4rem;
  }

  &__text {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    margin-right: 2.4rem;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #464646;
  }

  &__edit {
    margin-right: 2.4rem;
  }

  &__delete {
  }
}
</style>

