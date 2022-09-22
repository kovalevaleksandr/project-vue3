<template>
  <div class="filter">
    <Btn
        class="filter__item"
        v-for="btn in filterBtn"
        :key="btn.id"
        @clicker="getFilter"
        :meaning="btn.id"
        :btnProps="btnProps"
        :class="getStyle(btn.id)"
    >
      <span>{{btn.name}}</span>
    </Btn>
  </div>
</template>
<script setup lang="ts">
import Btn from "@/components/UI/Button.vue";
import {computed} from "vue";

console.log('BTN', Btn)

const props = defineProps<{
  filterBtn: object[]
  filterActive: string
}>()
const emits = defineEmits(['getFilter'])

const getStyle = (btnId:string)=> {
  return {'filter__item--active': props.filterActive === btnId, filter__item: true}
}
const styleFilter = computed(()=> {
  return props.filterActive === Btn.id
})

const btnProps = {
  name: "add",
  color: "white",
}
function getFilter(id:string):void {
  emits('getFilter' , id)
}
</script>
<style scoped lang="scss">
.filter {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &__item {
    padding: 2px 8px;
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