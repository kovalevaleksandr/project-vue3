<template>
  <VHeader />
  <main class="main">
    <router-view />
  </main>
  <VFooter />
</template>

<script>
import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";
export default {
  components: {
    VHeader,
    VFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1 1 auto;
}
</style>
