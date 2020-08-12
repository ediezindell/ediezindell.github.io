<template>
  <div>
    edit: {{ id }}
  </div>
</template>

<script lang="ts">
// import hogehoge from '@/components/hogehoge'

export default {
  name: "Edit",
  props: {
    id: {
      type: Number,
      required: true,
    },
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

</style>