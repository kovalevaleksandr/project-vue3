<template>
  <div class="item">
    {{item.text}}
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  item: object
}>()
</script>