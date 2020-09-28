<template>
  <main role="main" id="main">
    <!-- <a @click="$router.go(-1)">back</a> -->
    <LinkButton :linkname="backLinkName" :msg="backLinkMsg"></LinkButton>
    <article id="novel-detail">
      <section>
        <h1 id="novel-detail__title">『{{ ctitle }}』</h1>
        <Tags :tags="tags"></Tags>
        <div v-html="cbody" id="novel-detail__body"></div>
      </section>
    </article>
  </main>
</template>

<script lang="ts">
import Tags from '@/components/Tags'
import LinkButton from '@/components/LinkButton'

export default {
  name: "Detail",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    Tags,
    LinkButton,
  },
  methods: {
    scrollTop: function(){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  computed: {
    cbody: function() {
      return this.body.replace(/\n/g, '<br>')
    },
    ctitle: function() {
      return `無題${this.id}`
    },
  },
  data: function () {
    return {
      title: "",
      tags: [],
      body: "",
      backLinkName: "Home",
      backLinkMsg: "back",
    }
  },
  mounted() {
    if(this.id === undefined) {
      this.$router.push('/404')
    }
    this.scrollTop()
    // axios.get(`../assets/data/novels/${this.id}.json`)
    // .then(NovelData => (
    //   this.title = NovelData.title
    //   this.tags = NovelData.tags
    //   this.body = NovelData.body
    // ));
  },
  watch: {
  },
}
</script>

<style lang="scss" scoped>
#novel-detail {
  display: block;
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  max-width: 580px;

  &__title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--text-sub-color);
  }

  &__body {
    padding: 10px;
    line-height: 2.5rem;
    text-align: center;
  }
}
</style>
