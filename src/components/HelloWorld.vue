<template>
  <div>
    <v-btn @click="getPostList">Загрузить посты</v-btn>
    <v-input v-model="modelValue" placeholder="Ввод" />
    <v-btn @click="openModal">Открыть модалку</v-btn>
    <v-select v-model="selected" :options="sortOptions"></v-select>
    <v-modal v-model:show="showModal"> {{ modelValue }}</v-modal>
    <v-table></v-table>
  </div>
</template>
<script>
import VTable from "@/components/UI/Table";
import VInput from "@/components/UI/Input";
import VBtn from "@/components/UI/Button";
import VSelect from "@/components/UI/Select";
import VModal from "@/components/UI/Modal";
import axios from "axios";

export default {
  name: "HelloWorld",
  components: { VTable, VModal, VSelect, VBtn, VInput },
  data() {
    return {
      modelValue: "",
      selected: "",
      sortOptions: [{ value: "title", name: "название" }],
      showModal: false,
      dataValue: [],
      columns: [
        { name: "id", text: "Id" },
        { name: "data", text: "Дата" },
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
    async getPostList() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.dataValue = response.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style scoped lang="scss"></style>
