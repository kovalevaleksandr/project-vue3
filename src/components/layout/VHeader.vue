<template>
  <header class="header">
    <div class="header__container">
      <div class="header__wrapper">
        <div class="header__logo">
          <router-link class="header__nav-item" to="/">
            <img src="@/assets/images/logo.svg" alt="logo" class="header__logo-img">
          </router-link>
        </div>
        <nav class="header__nav">
        </nav>
        <div
            class="header__login"
            @click="showAuth"
        >
          <span>login</span>
        </div>
      </div>
    </div>
  </header>

  <teleport to="body">
  <transition name="slide-fade">
    <Modal
        v-model:show="authModalVisible"
    >
      <TodoAuth/>
    </Modal>
  </transition>
  </teleport>

</template>
<script setup lang="ts">
import {ref} from "vue";
import Modal from "@/components/UI/Modal.vue"
import TodoAuth from "@/components/todolist/Autharization/TodoAuth.vue"

const authModalVisible = ref(false)
const showAuth = (): void => {
  authModalVisible.value = true
}
</script>
<style scoped lang="scss">
.header {
  padding: 23px 0;
  background: #FFFFFF;
  box-shadow: inset 0px -1px 0px #F0F0F0;

  &__container {
    max-width: 1840px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;

    &-img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  &__nav {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 2rem;

    &-item {
      margin-right: 3rem;
    }
  }

  &__login {
    cursor: pointer;
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