<template>
  <div id="tag-wrapper">
    <span v-for="tag in tags" v-bind:key="tag">
      #{{ tag }}
    </span>
  </div>
</template>

<script>
// import hogehoge from '@/components/hogehoge'

export default {
  name: "Tags",
  props: {
    tags: {
      type: Array,
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
#tag-wrapper {
  color: var(--text-sub2-color);
}
#tag-wrapper span {
  padding: 5px;
  margin: 5px;
}
</style>