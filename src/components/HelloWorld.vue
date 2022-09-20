<template>
  <div>
    <v-input v-model="modelValue" placeholder="Ввод" />
    <v-btn @click="openModal" :btnProps="btnProps"> Открыть модалку </v-btn>
    <v-select v-model="selected" :options="sortOptions"></v-select>
    <v-modal v-model:show="showModal"> {{ modelValue }}</v-modal>
    <v-table :dataValues="posts" :columns="columns"></v-table>
  </div>
</template>
<script>
import VTable from "@/components/UI/Table";
import VInput from "@/components/UI/Input";
import VBtn from "@/components/UI/Button";
import VSelect from "@/components/UI/Select";
import VModal from "@/components/UI/Modal";
import { usePosts } from "@/hooks/usePosts";

export default {
  name: "HelloWorld",
  components: { VTable, VModal, VSelect, VBtn, VInput },
  setup(props) {
    const { posts, isPostLoading } = usePosts();
    return {
      posts,
      isPostLoading,
    };
  },
  data() {
    return {
      btnProps: {
        name: "close",
        color: "white",
      },
      modelValue: "",
      selected: "",
      sortOptions: [{ value: "title", name: "название" }],
      showModal: false,
      columns: [
        { name: "id", text: "Id" },
        { name: "title", text: "Заголовок" },
        { name: "body", text: "Содержание" },
      ],
    };
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modalValue", event.target.value);
    },
    openModal() {
      this.showModal = true;
    },
  },
};
</script>
<style scoped lang="scss"></style>
