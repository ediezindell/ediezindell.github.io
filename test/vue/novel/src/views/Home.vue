<template>
  <main role="main" id="main">
    <section>
      <h1 id="page-title">小説一覧</h1>
      <p id="page-info">
        {{ nowPage }} / {{ max_page }} ページ目
        {{ beginCnt }} - {{ endCnt }} を表示中
      </p>
      <div class="novels">
        <article class="novels__item" v-for="item in novels" v-bind:key="item.id">
          <!-- <router-link :to="{name: 'Detail', params: {id: item.id}}" > -->
            <NovelItem :id="item.id" :title="item.title" :tags="item.tags" :body="item.body"></NovelItem>
          <!-- </router-link> -->
        </article>
      </div>
      <!-- <pagenation></pagenation> -->
    </section>
  </main>
</template>

<script lang="ts">
import NovelItem from '@/components/NovelItem'
import NovelData from '../assets/data/index.json'

export default {
  name: "Home",
  props: {
    page: {
      type: String,
      required: false,
    },
  },
  components: {
    NovelItem,
  },
  methods: {
  },
  computed: {
    beginCnt: function() {
      return this.offset + 1;
    },
    endCnt: function() {
      return this.offset + this.novels.length;
    },
    nowPage: function() {
      return (this.page == undefined || this.page > this.max_page || this.page < 0) ? 1 : this.page;
    }
  },
  data: function () {
    return {
      novels: [],
      max_page: 1,
      limit: 10,
      offset: 0,
      all_item_count: 0,
    }
  },
  mounted() {
    this.novels = NovelData.novels.slice(this.offset, this.limit);
    this.all_item_count = NovelData.novels.length;
  },
  watch: {
  },
}
</script>

<style lang="scss" scoped>
#page-title {
  font-size: 2rem;
  margin: 10px 0;
}

.novels {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  &__item {
    width: calc(100% / 3 - 40px);
    min-width: 400px;
    max-width: 600px;
    margin: 10px 5px;
    padding: 5px;
    /* border: 1px solid var(--text-sub2-color); */
    border-radius: 5px;
    background-color: var(--card-item-color);
    box-shadow: 2px 4px 4px var(--shadow-color);
    transition: all 0.1s ease-out;

    flex: 1;

    &:hover {
      box-shadow: 0 0;
    }
  }
}

@media screen and (max-width: 990px) {
  .novels {
    &__item {
      width: 100%;
      margin: 10px 0;
      padding: 10px;
      min-width: 280px;
    }
  }
}

</style>