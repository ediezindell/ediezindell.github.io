<template>
  <main role="main" id="main">
    <article id="">
      <section>
        <h1 id="">edit page</h1>
        edit: {{ id }}
      </section>
    </article>
  </main>
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