<template>
  <div id="novel-item">
    <h2 id="novel-title">『{{ title }}』</h2>
    <span id="new-label">new</span>
    <Tags :tags="tags"></Tags>
    <p id="novel-body">{{ body }}</p>
    <div id="novel-subitem-wrapper">
      <time id="novel-updated" datetime="2020-07-01T01:05:12" pubtime>2020-07-01</time>
      <LinkButton :linkname="detailLinkName" :id="id" :msg="detailLinkMsg"></LinkButton>
    </div>
  </div>
</template>

<script lang="ts">
import Tags from '@/components/Tags'
import LinkButton from '@/components/LinkButton'

export default {
  name: 'NovelItem',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  components: {
    Tags,
    LinkButton,
  },
  methods: {
  },
  computed: {
  },
  data: function () {
    return {
      detailLinkName: "Detail",
      detailLinkMsg: "> Read More",
    }
  },
  mounted() {
  },
  watch: {
  },
}
</script>

<style scoped>
#novel-title {
  font-weight: bold;
  font-size: 1.2em;
  color: var(--text-main-color);
  border-bottom: 1px solid #ccc;
  padding: 5px;
  margin-bottom: 10px;
}

#novel-body {
  color: var(--text-sub-color);
  padding: 10px;
}

#novel-subitem-wrapper {
  display: block;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#novel-updated {
  padding: .5em 1.5em;
  font-size: .8em;
}
#novel-item {
  position: relative;
  overflow: hidden;
}
#new-label {
  position: absolute;
  top: -1em;
  right: -5em;
  color: var(--main-color);
  background-color: var(--sub-color);
  transform: rotate(45deg);
  padding: 2em 5em 0;
}

@media screen and (max-width: 990px) {
  #body {
    max-height: 100px;
    margin-bottom: 15px;
    overflow: hidden;
  }
}

</style>