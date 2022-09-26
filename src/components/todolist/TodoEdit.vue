<template>
<div class="edit">
  <div class="edit__title">
    Редактирование задачи:
  </div>
  <MyInput
      class="edit__input"
      :modelValue="title"
      v-model="newTitle"
      @keydown.enter="edit"
  />
</div>

</template>
<script setup lang="ts">
import MyInput from "@/components/UI/MyInput.vue"
import {ref} from "vue";

const emits = defineEmits([
 "edit"
]);

const newTitle = ref('')

const props = defineProps<{
  title: string;
}>();

const edit = () :void => {
  emits("edit", newTitle.value)
}
</script>
<style scoped lang="scss">
.edit {
  padding: 5rem 10rem;

  &__input {
    background: #ffffff;
    border: 1px solid #dbe0e9;
    box-shadow: 1px 1px 4px rgb(0 0 0 / 10%);
    border-radius: 2px 0 0 2px;
  }
}
</style>