<template>
  <div class="auth">
    <div class="auth__title">
      <span>Exceed To-Do list</span>
    </div>
    <div class="auth__desc">
      <span>Пожалуйста, выполните вход или регистрацию в системе</span>
    </div>
    <div class="auth__form">
      <ul class="auth__tab">
        <li
            class="auth__tab-item"
            v-for="tab of authTab"
            :key="tab.id"
            @click="goTab(tab.id)"
            :class="{'auth__tab-item--active' : currentTab === tab.id}"
        >
          {{ tab.name }}
        </li>
      </ul>
      <transition name="flip" mode="out-in" >
        <TodoLogin
            v-if="currentTab === 'login'"
            :typeInputPassword="typeInputPassword"
            @showPassword="showPassword"
        />
        <TodoRegistration
            v-else
            @showPassword="showPassword"
            :typeInputPassword="typeInputPassword"
        />
      </transition>

<!--            <component :is=" currentTab.value === 'login' ? Tabs.login : Tabs.registration"/>-->
    </div>

  </div>
</template>
<script setup lang="ts">
import {ref, computed, watch} from "vue";
import TodoLogin from "@/components/todolist/Autharization/TodoLogin.vue"
import TodoRegistration from "@/components/todolist/Autharization/TodoRegistration.vue"

// const tabs = [
//   "TodoLogin", "TodoRegistration"
// ]
//
// enum Tabs {
//   login = "TodoLogin",
//   registration = "TodoRegistration"
// }

// const tabsComponent = computed(() => {
//   return 'Todo' + currentTab.value[0].toUpperCase() + currentTab.value.slice(1)
// })

const typeInputPassword = ref('Password')

const showPassword = () => {
  if (typeInputPassword.value === 'Password') {
    typeInputPassword.value = 'Text'
  } else {
    typeInputPassword.value = 'Password'
  }
}

const currentTab = ref("login")

watch(
    currentTab,
    () => {
      typeInputPassword.value = 'Password'
    },
);

const goTab = (tabId: string): void => {
  console.log(tabId)
  currentTab.value = tabId
}

const authTab = [
  {id: "login", name: "Вход"},
  {id: "registration", name: "Регистрация"},
]
</script>
<style scoped lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;

  &__title {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 38px;
    letter-spacing: 0.005em;
    color: #464646;
    margin-bottom: 1.2rem;
  }

  &__desc {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #606060;
    margin-bottom: 3rem;
  }

  &__form {
    max-width: 36.8rem;
    width: 100%;
  }

  &__tab {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 3rem;

    &-item {
      margin-right: 3.25rem;
      border-bottom: 2px solid transparent;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #606060;
      cursor: pointer;

      &:hover,
      &--active {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1859FF;
        border-bottom: 2px solid #1859FF;
      }
    }
  }
}

.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
  transform-origin: 50% 50%;
}

.flip-leave-active {
  transform-origin: 50% 50%;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
}

.flip-enter-from,
.flip-leave-to {
  transform-origin: 50% 50%;
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
</style>