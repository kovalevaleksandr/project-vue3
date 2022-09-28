<template>
  <div class="todo">
    <div class="todo__container">
      <div class="todo__wrapper">
        <TodoCreate
            class="todo__create"
            title=""
            @addTodo="addTodo"
        />
        <TodoFilter
            class="todo__filter"
            @getFilter="getFilter"
            :filterActive="filterActive"
        />

        <TodoList
            class="todo__list"
            @deleteTodo="deleteTodo"
            @showInfo="showInfo"
            @saveTodo="saveTodo"
            @editTodo="editTodo"
            :postCurrent="postCurrent"
            :items="items"
            :filterActive="filterActive"
        />

        <TodoPagination
            class="todo__pagination"
            :limit="limit"
            :totalPage="totalPage"
            :page="page"
            @pageCurrent="pageCurrent"
            @backPage="backPage"
            @nextPage="nextPage"
        />

        <teleport to="body">
          <TodoAlert
              :alerts="alerts"
          />
        </teleport>

        <teleport to="body">
          <transition name="slide-fade">
            <Modal
                v-model:show="dialogVisible">
              <TodoAbout
                  :textShow="textShow"
                  :items="items"
              />
            </Modal>
          </transition>
        </teleport>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
import TodoCreate from "@/components/todolist/TodoCreate.vue";
import TodoList from "@/components/todolist/TodoList.vue";
import TodoFilter from "@/components/todolist/TodoFilter.vue";
import Modal from "@/components/UI/Modal.vue";
import TodoAbout from "@/components/todolist/TodoAbout.vue";
import TodoPagination from "@/components/todolist/TodoPagination.vue"
import {TodoItems} from "@/types"
import TodoAlert from "@/components/todolist/TodoAlert.vue"

const items = ref([]);
const filterActive = ref("all");
const dialogVisible = ref(false);
const modalEdit = ref(false);
const textShow = ref({title: '', date: '', completed: false});
const STORAGE_KEY = "todoList"

onMounted(() => {
  items.value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
});

watch(
    items,
    (newValue) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
    },
    {deep: true}
);


const limit = 10;
const page = ref(1);

const totalPage = computed(() => {
  return Math.ceil(items.value.length / limit)
});

const backPage = (): void => {
  if (page.value > 1) {
    page.value = page.value - 1
  }
}

const nextPage = (): void => {
  if (page.value < totalPage.value) {
    page.value = page.value + 1
  }
}

const pageCurrent = (pageNumber: number) => {
  page.value = pageNumber
}

const postCurrent = computed(() => {
  return items.value.slice((page.value - 1) * 10, page.value * limit)
})

const lastId = computed(() => {
  return items.value.at(-1)?.id
});

const editTodo = (): void => {
  modalEdit.value = true;
}

function getFilter(id: string): void {
  filterActive.value = id;
}

const showInfo = (item: TodoItems): void => {
  dialogVisible.value = true;

  textShow.value.title = item.title;
  textShow.value.date = item.date;
  textShow.value.completed = item.completed;
}

const addTodo = (title: string): void => {
  items.value.push({
    id: lastId.value + 1 || 0,
    title,
    completed: false,
    date: Date(),
  });

  page.value = totalPage.value

  addAlerts()
}

const alerts = ref([])

const addAlerts = () => {
  alerts.value.unshift(
      {
        type: 'success',
        title: 'Задание успешно выполнено',
        cancel: true
      }
  )
}

// watch(
//     alerts,
//     () => {
//       hideAlerts()
//     },
//     {deep: true}
// );
//
// const hideAlerts = () => {
//   setTimeout(() => {
//     alerts.value.splice(0, 1)
//   }, 3000)
// }

const typeAlerts = [
  {type: 'success', title: 'Задание успешно выполнено'},
  {type: 'info', title: 'Задание добавлено'},
  {type: 'warning', title: 'Срок задания скоро истечёт'},
  {type: 'danger', title: 'Задание не было добавлено'},
]

//undefined не придет что делать
const saveTodo = (newTitle: string, item: TodoItems): void => {
  console.log(newTitle)
  items.value.find((i) => i.id === item.id).title = newTitle;

  addAlerts()
}

const deleteTodo = (item: TodoItems): void => {
  //delete
  items.value = items.value.filter((i) => i.id !== item.id);

  //go page
  pageAfterDelete()

  //show alerts
  addAlerts()
}

const pageAfterDelete = () :void => {
  page.value = totalPage.value
}

</script>
<style scoped lang="scss">
.todo {
  margin-top: 6rem;
  background: #fafafa;

  &__container {
    max-width: 124rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__filter {
    align-self: flex-start;
    margin-bottom: 2rem;
  }

  &__create {
    margin-bottom: 4rem;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
