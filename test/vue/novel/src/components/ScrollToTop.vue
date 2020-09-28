<template>
  <div id="scroll-top-button" v-show="y > 300" @click="to_top">
    ＾
  </div>
</template>

<script>
export default {
  name: "ScrollToTop",
  props: {
  },
  methods: {
    handleScroll: function () {
      this.y = window.scrollY;
    },
    to_top: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  data: function () {
    return {
      y: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
#scroll-top-button {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 30px;
  color: var(--main-color);
  background-color: var(--sub-color);
  border: 1px solid var(--sub-color);
  cursor: pointer;
  // transform: rotate(90deg);

  &:hover {
    color: var(--sub-color);
    background-color: var(--main-color);
  }
}
</style>