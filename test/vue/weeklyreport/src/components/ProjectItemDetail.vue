<template>
  <div class="project-item-detail">
    <!-- {{ item.id }} -->
    <tr>
      <th>案件名</th>
      <td><input v-model="item.name" type="text"></td>
    </tr>
    <tr>
      <th>進捗</th>
      <td><input v-model="item.progress" type="text">%</td>
    </tr>
    <tr>
      <th>作業時間</th>
      <td><input v-model="item.time" type="number" min="0">h</td>
    </tr>
  </div>
</template>

<script>
export default {
  name: "ProjectItemDetail",
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  components: {
    // hogehoge,
  },
  methods: {
  },
  computed: {
  },
  data: function () {
    return {}
  },
  mounted() {
  },
  watch: {
  },
}
</script>

<style scoped>
.project-item-detail {
  padding: 10px;
  /* background-color: #ccc; */
  margin: 10px;
  border-radius: 5px;
  box-shadow: 5px 2px #ccc;
}
</style>