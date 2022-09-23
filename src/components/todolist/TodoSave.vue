<template>
  <div
      class="save"
      @click=saveTodo
  >
    <img src="@/assets/images/save.svg" alt="save">
  </div>
</template>
<script setup lang="ts">
const emits = defineEmits(['saveTodo',])
function saveTodo() {
  emits('saveTodo')
}
</script>