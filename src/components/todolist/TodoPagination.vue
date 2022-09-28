<template>
  <div class="pagination" v-if="props.totalPage > 1">
    <div class="pagination__count">
      <span>Страница</span>
      <span>{{ props.page }}</span>
      <span>из</span>
      <span>{{ props.totalPage }}</span>
    </div>
    <div
        class="pagination__prev"
        @click="backPage"
        :class="{'pagination__page--disabled' : props.page === 1}"
    >
      <span> Пред </span>
    </div>
    <div
        class="pagination__page"
        v-for="pageNumber in props.totalPage"
        :key="pageNumber"
        :class="{'pagination__page--selected' : pageNumber === props.page}"
        @click="pageCurrent(pageNumber)"
    >
      {{ pageNumber }}
    </div>
    <div
        class="pagination__next"
        @click="nextPage"
        :class="{'pagination__page--disabled' : props.page === props.totalPage}"
    >
      <span> След  </span>
    </div>
  </div>
</template>
<script setup lang="ts">
const emits = defineEmits([
  "pageCurrent", "backPage", "nextPage"
]);

const props = defineProps<{
  limit: number;
  page: number;
  totalPage: number
}>();

const pageCurrent = (pageNumber :number) :void => {
  emits("pageCurrent", pageNumber)
}

const backPage = () => {
  emits('backPage')
}

const nextPage = () => {
emits('nextPage')
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;

  &__count {
    display: flex;
    margin-right: 1rem;

    span {
      margin-right: .5rem;
    }
  }

  &__prev,
  &__next  {
    border: 1px solid transparent;
    margin-right: 1rem;

    &:hover {
      background-color: #1a73e8;
      border: .1rem solid #000000;
      cursor: pointer;
    }
  }

  &__page {
    border: .1rem solid #000000;
    padding: .1rem 1rem;
    margin-right: .5rem;
    cursor: pointer;

    &--selected,
    &:hover {
      background-color: #1a73e8;
      border: .1rem solid #000000;
    }

    &--disabled {
      background-color: #464646;

      &:hover {
        background-color: #464646;
      }
    }
  }




}
</style>