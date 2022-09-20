<template>
  <table>
    <thead>
      <tr>
        <th
            v-for="column in columns"
            :key="column.name">
          {{ column.text }}
        </th>
      </tr>
    </thead>
    <tr
        v-for="dataValue in dataValues"
    >
      <td>{{dataValue.id}}</td>

      <td>{{dataValue.title}}</td>

      <td>{{dataValue.body}}</td>
    </tr>
  </table>
</template>

<script lang="ts">
export default{
  name: "v-table",
  props: {
    columns: {
      type: Array,
      default: [
        { name: "id", text: "Id" },
        { name: "title", text: "Заголовок" },
        { name: "body", text: "Содержание" },
      ]
    },
    dataValues: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
