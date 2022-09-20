<template>
  <div>
    <VInput v-model="modelValue" placeholder="Ввод"/>
    <VBtn @click="openModal" :btnProps="btnProps"> Открыть модалку</VBtn>
    <VSelect v-model="selected" :options="sortOptions"></VSelect>
    <VModal v-model:show="showModal"> {{ modelValue }}</VModal>
    <VTable :dataValues="posts" :columns="columns"></VTable>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {usePosts} from "@/hooks/usePosts";
import VTable from "./UI/Table.vue";
import VInput from "@/components/UI/Input.vue";
import VBtn from "@/components/UI/Button.vue";
import VSelect from "@/components/UI/Select.vue";
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
const modelValue = ref("")
const selected = ref("")
const showModal = ref(false)
const sortOptions = ref([{value: "title", name: "название"}])
const {posts, isPostLoading} = usePosts();

function openModal(): void {
  showModal.value = true;
}


</script>
<style scoped lang="scss"></style>
