<template>
  <div
      class="item"
      :class="{ 'item--completed': props.item.completed }"
      @click.self="showInfo"
  >

    <TodoCheck
        class="item__check"
        v-model="props.item.completed"
        :checked="props.item.completed"
        value
    />

    <TodoInput
        class="item__text"
        :class="{ 'item__text--completed': props.item.completed }"
        :value="props.item.title"
        :readonly="stateEdit"
        @click="showInfo"
        model-value="props.item.title"
    />

    <div
        :class="[stateEdit ? 'item__edit' : 'item__save', stateEdit ? 'edit' : 'save',]"

    >
      <img
          class="edit__img"
          src="@/assets/images/edit.svg"
          alt="edit"
          @click="editTodo"
          v-if="stateEdit"
      >
      <img
          src="@/assets/images/save.svg"
          alt="save"
          @click="saveTodo"
          v-else
      >

    </div>

    <div
        class="item__delete delete"
        @click.stop="deleteTodo"
    >
      <img src="@/assets/images/delete.svg" alt="del">
    </div>

    <teleport to="body">
      <Modal
          v-model:show="editVisible"
      >
        <TodoEdit
            :title="item.title"
            @edit="saveTodo"
        />
      </Modal>
    </teleport>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import TodoCheck from "@/components/todolist/TodoCheck.vue";
import TodoInput from "@/components/UI/MyInput.vue";
import TodoEdit from "@/components/todolist/TodoEdit.vue"
import Modal from "@/components/UI/Modal.vue"
import {TodoItems} from "@/types"

const emits = defineEmits([
  "deleteTodo", "showInfo", "editTodo", "saveTodo"
]);

const props = defineProps<{
  item: TodoItems;
}>();

const stateEdit = ref(true);

const showInfo = (): void => {
  emits("showInfo");
}

const editVisible = ref(false)

// const edit = (newTitle: string): void => {
//   console.log(newTitle)
// }

const editTodo = (): void => {
  stateEdit.value = false;
  editVisible.value = true;
  emits("editTodo");
}

const saveTodo = () :void => {
  console.log('save')
  stateEdit.value = true;
  emits("saveTodo");
}

const deleteTodo = (): void => {
  emits("deleteTodo");
}
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 1.6rem;
  margin-bottom: 1rem;
  background: #ffffff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  cursor: pointer;
  position: relative;

  &--completed {
    opacity: 0.4;

    .item__text {
      text-decoration-line: line-through;
      color: #464646;
    }
  }

  &:not(.item--completed):hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    background: #f0f2f6;
    border-radius: 2px 2px 0 0;

    .item__text {
      font-weight: 500;
      color: #1a73e8;
      background: #f0f2f6;
    }
  }

  &__check {
    margin-right: 2.4rem;
  }

  &__save {
    margin-right: 2.4rem;
  }

  &__text {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    margin-right: 2.4rem;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #464646;
    outline: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  &__edit {
    margin-right: 2.4rem;
  }

  &__delete {
  }
}
</style>
