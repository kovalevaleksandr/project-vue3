<template>
  <div class="filter">
    <Btn
        class="filter__item"
        :class="getStyle(btn.id)"
        v-for="btn in filterBtn"
        :key="btn.id"
        @click="getFilter(btn.id)"
    >
      <span>{{btn.name}}</span>
    </Btn>
  </div>
</template>
<script setup lang="ts">
import Btn from "@/components/UI/Button.vue";
import {computed} from "vue";

const props = defineProps<{
  filterActive: string
}>()
const emits = defineEmits(
    ['getFilter']
)

const filterBtn = [
  { id: "all", name: "Все задания" },
  { id: "active", name: "Активные задания" },
  { id: "completed", name: "Выполненные задания" },
];

const getStyle = (btnId:string) => {
  return {'filter__item--active': props.filterActive === btnId}
}

const getFilter = (id:string):void => {
  emits('getFilter' , id)
}
</script>
<style scoped lang="scss">
.filter {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &__item {
    padding: .2rem .8rem;
    background: #FFFFFF;
    border: 1px solid #DBE0E9;
    border-radius: 2px;
    margin-right: 2rem;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #606060;

    &:hover, &--active{
      border: 1px solid #1859FF;
      box-shadow: 02px 0 rgba(0, 0, 0, 0.016);
      border-radius: 2px;
      color: #1859FF;
    }
  }
}
</style>