<template>
  <div class="link-button">
    <router-link :to="{name: linkname, params: linkparams}" >
      {{ msg }}
    </router-link>
  </div>
</template>

<script lang="ts">
// import hogehoge from '@/components/hogehoge'

export default {
  name: 'LinkButton',
  props: {
    linkname: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: false,
    },
  },
  components: {
  },
  methods: {
  },
  computed: {
    linkparams: function() {
      let json = {}
      if (this.id !== undefined) {
        json['id'] = this.id
      }
      return json
    }
  },
  data: function () {
    return {
    }
  },
  mounted() {
  },
  watch: {
  },
}
</script>

<style lang="scss" scoped>
.link-button {
  font-size: 1.2rem;
  margin: 0;
  position: relative;
  &:before {
    position: absolute;
    width: 10px;
    height: 10px;
    border-top: 1px solid white;
    border-right: 1px solid white;
    top: 0;
    right: 15px;
    display: block;
  }
  a {
    display: inline-block;
    background-color: var(--sub-color);
    color: var(--main-color);
    border: 1px solid transparent;
    padding: 10px;
    /* text-decoration: underline; */
    border-radius: 5px;
    &:hover {
      text-decoration: none;
      color: var(--sub-color);
      background-color: var(--main-color);
      border: 1px solid var(--sub-color);
    }
  }
}

</style>