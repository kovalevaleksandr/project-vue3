<template>
  <div class="todo">
    <div class="todo__container">
      <div class="todo__wrapper">
        <TodoCreate
            class="todo__create"
            title=""
            @addTodo="addTodo"
            :items="items"
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
              @cancelAction="cancelAction"
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
import {IAlerts, TodoItems} from "@/types"
import TodoAlert from "@/components/todolist/TodoAlert.vue"
import {validEmail} from "@/services/Regex"

const items = ref([]);
const filterActive = ref("all");
const dialogVisible = ref(false);
const modalEdit = ref(false);
const textShow = ref({title: '', date: '', completed: false});
const STORAGE_KEY = "todoList"
const alerts = ref([])
const limit = 10;
const page = ref(1);
const itemAfterDelete = ref([])

const totalPage = computed(() => {
  return Math.ceil(items.value.length / limit)
});

const lastId = computed(() => {
  return items.value.at(-1)?.id
});

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

///////////////////page///////////////////

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

const pageAfterDelete = (): void => {
  page.value = totalPage.value
}

//////////////////edit + save////////////////

const editTodo = (): void => {
  modalEdit.value = true;
}

const saveTodo = (newTitle: string, item: TodoItems): void => {
  items.value.find((i) => i.id === item.id).title = newTitle;
}


//////////////filter////////////////////

function getFilter(id: string): void {
  filterActive.value = id;
}

////////////////info////////////////

const showInfo = (item: TodoItems): void => {
  dialogVisible.value = true;

  textShow.value.title = item.title;
  textShow.value.date = item.date;
  textShow.value.completed = item.completed;
}

const typeAlerts = [
  {type: 'success', title: 'Задание успешно выполнено'},
  {type: 'info', title: 'Задание добавлено'},
  {type: 'warning', title: 'Срок задания скоро истечёт'},
  {type: 'danger', title: 'Задание не было добавлено'},
]

const addTodo = (title: string): void => {
  const regValue = validEmail(title)

  if (title && !items.value.find((i) => i.title === title)) {
    items.value.push({
      id: Date.now(),
      title,
      completed: false,
      date: Date(),
    });
    page.value = totalPage.value

    alerts.value.push(
        {
          idTodo: getLastId.value,
          id: Date.now(),
          todo: title,
          ...typeAlerts[1]
        }
    )
  } else {
    alerts.value.push(
        {
          idTodo: null,
          id: Date.now(),
          todo: '',
          type: 'danger',
          title: 'Задание не было добавлено',
        }
    )
  }
}



const getLastId = computed(() => {
  return items.value.at(-1)?.id
})


//////////////////delete//////////////////

const deleteTodo = (item: TodoItems): void => {

  itemAfterDelete.value.push({...item, lastPosinion: items.value.findIndex((i) => i.id === item.id)})

  items.value = items.value.filter((i) => i.id !== item.id);

  //go page
  pageAfterDelete()

  alerts.value.push(
      {
        idTodo: item.id,
        id: Date.now(),
        todo: item.title,
        type: 'warning',
        title: 'Задание удалено',
      }
  )
}

//////////////////alerts////////////////////

onMounted(() => {
  hideAlerts()
})

watch(
    alerts,
    () => {
      hideAlerts()
    },
    {deep: true}
);

const hideAlerts = () => {
  if (alerts.value.length) {
    setTimeout(() => {
      alerts.value.splice(0, 1)
    }, 3000)
  }
}

const cancelAction = (alert: IAlerts): void => {
  const alertsId = alerts.value.findIndex((i) => i.idTodo === alert.id)
  switch (alert.type) {
    case "success":
      break;
    case "info":
      const index = items.value.findIndex((i) => i.idTodo === alert.id)
      items.value.splice(index, 1);
      alerts.value.splice(alertsId, 1)
      break;
    case "warning":
      const inItems = itemAfterDelete.value.find((i) => i.id === alert.idTodo)
      const indexItems = itemAfterDelete.value.find((i) => i.id === alert.idTodo).lastPosinion
      itemAfterDelete.value.splice(inItems, 1)
      const itemItems = itemAfterDelete.value.find((i) => i.id === alert.idTodo)
      delete itemItems.lastPosinion
      items.value.splice(indexItems, 0, itemItems);
      alerts.value.splice(alertsId, 1)
      itemAfterDelete.value.splice(inItems, 1)
      break;
  }
}

</script>
<style scoped lang="scss">
.todo {
  margin-top: 6rem;
  background: #fafafa;

  &__container {
    max-width: 104rem;
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
