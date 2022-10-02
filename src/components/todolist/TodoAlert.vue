<template>
  <div
      class="alert"
  >
    <transition-group
        name="list"
    >
    <div
        class="alert__content alert-success"
        :class="styleAlert(alert.type)"
        v-for="alert in props.alerts"
        :key="alert.id"
    >
      <div class="alert__icon">
        <img src="@/assets/images/alert-icons/success.svg" alt="icon" v-if="alert.type === 'success'">
        <img src="@/assets/images/alert-icons/info.svg" v-else-if="alert.type === 'info'" alt="icon">
        <img src="@/assets/images/alert-icons/warning.svg" v-else-if="alert.type === 'warning'" alt="icon">
        <img src="@/assets/images/alert-icons/danger.svg" v-else-if="alert.type === 'danger'" alt="icon">
      </div>
      <div class="alert__wrapper">
        <div class="alert__title">
          {{ alert.title }}
        </div>
        <div class="alert__desc" :class="{'alert__desc-todo' : alert.type !== 'danger'}">
          <span v-if="alert.type !== 'danger'">Название задания: {{ alert.todo }}</span>
          <span v-else>Пустая или уже имеющаяся задача!</span>
        </div>
        <div
            class="alert__cancel"
            @click="cancelAction(alert)"
            v-if="alert.type === 'success' || alert.type === 'info' || alert.type === 'warning'"
        >
          <img
              src="@/assets/images/alert-icons/arrow-go-back.svg"
              alt="back"
              class="alert__cancel-icon"
          >
          <span>Нажмите чтобы отменить действие</span>
        </div>
      </div>
    </div>
    </transition-group>
  </div>
</template>
<script setup lang="ts">
import {IAlerts} from "@/types"
import {computed} from "vue";
// import { useStore } from 'vuex'
// const store = useStore()
//
// const alertStack = computed(() => store.state.alertStack)

const emit = defineEmits([
  "cancelAction"
]);

const props = defineProps<{
  alerts: IAlerts[];
}>();



const styleAlert = (type: string): string => {
  return 'alert-' + type
}

const cancelAction = (alert :IAlerts) :void => {
  emit("cancelAction", alert)
}
</script>
<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 8rem;
  right: 2rem;
  display: flex;
  flex-direction: column-reverse;

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

    &-todo {
      margin-bottom: 2.2rem;
    }
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

.list-enter-active,
.list-leave-active {
  transition: all .3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>