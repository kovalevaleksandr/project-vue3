<template>
<div
    class="edit"
    @click=editTodo
>
  <img src="@/assets/images/edit.svg" alt="ed">
</div>
</template>
<script setup lang="ts">
const emits = defineEmits(['editTodo',])
function editTodo() {
  emits('editTodo')
}
</script>