<template>
  <div class="tags">
    <span class="tags__item" v-for="tag in tags" v-bind:key="tag">
      <router-link :to="{name: linkname, params: {tag: tag}}" >
        #{{ tag }}
      </router-link>
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
    return {
      linkname: "Search",
    }
  },
  mounted() {
  },
  watch: {
  },
}
</script>

<style lang="scss" scoped>
.tags {
  color: var(--text-sub2-color);

  &__item {
    padding: 5px;
    display: inline-block;

    a {
      color: var(--text-sub2-color);
      transition: .3s;
      position: relative;
      display: inline-block;
      text-decoration: none;

      &:hover {
        color: var(--link-color);
        // text-decoration: underline;

        &::after {
          transform: scale(1, 1);
        }
      }

      &::after {
        position: absolute;
        bottom: 5px;
        left: 0;
        content: '';
        width: 100%;
        height: 1px;
        background: var(--link-color);
        transform: scale(0, 1);
        transform-origin: left top;
        transition: transform .3s;
      }
    }
  }
}
</style>