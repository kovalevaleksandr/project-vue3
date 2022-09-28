<template>
  <div
      class="alert"
  >
    <div
        class="alert__content alert-success"
        v-for="alert in props.alerts"
        :key="alerts.id"
    >
      <div class="alert__icon">
        <img src="@/assets/images/alert-icons/success.svg" alt="icon">
      </div>
      <div class="alert__wrapper">
        <div class="alert__title">
          {{ alert.title }}
        </div>
        <div class="alert__desc">
          <span>Название</span>
        </div>
        <div class="alert__cancel" @click="cancelAction" v-if="alert.cancel">
          <img
              src="@/assets/images/alert-icons/arrow-go-back.svg"
              alt="back"
              class="alert__cancel-icon"
          >
          <span>Нажмите чтобы отменить действие</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, watch} from "vue";

const emits = defineEmits([]);

const props = defineProps<{
  alerts: object;
}>();

const cancelAction = () => {

}


</script>
<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 8rem;
  right: 2rem;

  &__content {
    display: flex;
    padding: 1.6rem 2.6rem;
    border-radius: 2px;
    margin-bottom: 1rem;
  }

  &__title {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #464646;
  }

  &__desc {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #606060;
    margin-bottom: 2.2rem;
  }

  &__icon {
    margin-right: 1.8rem;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &-success {
    background: #F6FFED;
    border: 1px solid #B7EB8F;
  }

  &-info {
    background: #E6F7FF;
    border: 1px solid #91D5FF;
  }

  &-warning {
    background: #FFFBE6;
    border: 1px solid #FFE58F;
  }

  &-danger {
    background: #FFF1F0;
    border: 1px solid #FFCCC7;
  }

  &__cancel {
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    color: #464646;

    &-icon {
      display: block;
      width: 1rem;
      height: 1rem;
      margin-right: .8rem;
    }
  }
}
</style>