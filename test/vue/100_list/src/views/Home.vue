<template>
  <div>
    <WantsList v-bind:wants="wants"></WantsList>
  </div>
</template>

<script>
import WantsList from '@/components/WantsList.vue'

export default {
  name: "Home",
  props: [""],
  components: {
    WantsList,
  },
  methods: {
  },
  data: function() {
    return {
      wants: [
        {id: 1, title: "猫を買う", detail: "飼いたいのだ", done: false},
        {id: 2, title: "アプリを作る", detail: "何でもいいのだ", done: false},
        {id: 3, title: "家を買う", detail: "もう買った", done: true},
      ],
    };
  }

}
</script>

<style scoped>

</style>