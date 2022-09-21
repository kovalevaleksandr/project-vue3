<template>
  <section class="todo">
  <div class="container">
    <div class="my-components">
      <VInput v-model="inputValue" placeholder="Ввод"/>
      <VBtn @click="openModal" :btnProps="btnProps"> Открыть модалку</VBtn>
      <VSelect v-model="selected" :options="sortOptions"/>
      <span>{{selected}}</span>
      <VModal v-model:show="showModal"> {{ inputValue }}</VModal>
    </div>
    <VTable :dataValues="posts" :columns="columns"/>
  </div>
    </section>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {usePosts} from "@/hooks/usePosts";
import VTable from "./UI/Table.vue";
import VInput from "@/components/UI/Input.vue";
import VSelect from "@/components/UI/Select.vue";
import VBtn from "@/components/UI/Button.vue";
import VModal from "@/components/UI/Modal.vue";

const btnProps = ref({
  name: "close",
  color: "white",
})
const columns = ref([
  {name: "id", text: "Id"},
  {name: "title", text: "Заголовок"},
  {name: "body", text: "Содержание"},
])
const inputValue = ref("")
const selected = ref("")
const showModal = ref(false)
const sortOptions = ref([
  {value: "id", name: "id"},
  {value: "title", name: "название"},
])
const {posts} = usePosts();

function openModal(): void {
  showModal.value = true;
}


</script>
<style scoped lang="scss">
.container {
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
}

.my-components {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
</style>
