<template>
  <div v-show="loading">
    <div class="loading-wrapper">
      <vue-loading
        type="bars"
        color="#aaa"
        :size="{ width: '42px', height: '50px' }"
      >
      </vue-loading>
    </div>
  </div>
</template>

<script lang="ts">
import { VueLoading } from 'vue-loading-template'

export default {
  name: 'Loading',
  components: {
    VueLoading,
  },
  props: {
    loading: {
      type: Boolean,
      required: true,
    }
  }
}
</script>

<style>
.loading-wrapper {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  line-height: 100vh;
}
</style>