<template>
  <div class="novel-item">
    <h2 class="novel-item__title">『{{ title }}』</h2>
    <span class="novel-item__new-label">new</span>
    <Tags :tags="tags"></Tags>
    <p class="novel-item__body">{{ body }}</p>
    <div class="novel-subitem-wrapper">
      <time class="novel-item__updated" datetime="2020-07-01T01:05:12" pubtime>2020-07-01</time>
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

<style lang="scss" scoped>
.novel-item {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  &__title {
    font-weight: bold;
    font-size: 1.2em;
    color: var(--text-main-color);
    border-bottom: 1px solid #ccc;
    padding: 5px;
    margin-bottom: 10px;
  }

  &__body {
    color: var(--text-sub-color);
    padding: 10px;
    flex: 1;
  }

  &__updated {
    padding: .5rem 1.5rem;
    font-size: 1.2rem;
  }
  &__new-label {
    position: absolute;
    top: -1rem;
    right: -5rem;
    color: var(--main-color);
    background-color: var(--sub-color);
    transform: rotate(45deg);
    padding: 2rem 5rem 0;
  }

}

.novel-subitem-wrapper {
  display: block;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 990px) {
  .novel-item__body {
    max-height: 100px;
    margin-bottom: 15px;
    overflow: hidden;
  }
}

</style>