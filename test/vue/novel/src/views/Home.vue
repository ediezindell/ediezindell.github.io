<template>
  <main role="main">
    <section>
      <h1 id="page-title">小説一覧</h1>
      <p id="page-info">
        {{ nowPage }} / {{ max_page }} ページ目
        {{ beginCnt }} - {{ endCnt }} を表示中
      </p>
      <div id="novel-list">
        <article class="novel-list__item" v-for="item in novels" v-bind:key="item.id">
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
      novels: [
        {id: 1, title: '無題1', tags: ["test", "hoge", "foo"], body: '　ある日の事でございます。御釈迦様おしゃかさまは極楽の蓮池はすいけのふちを、独りでぶらぶら御歩きになっていらっしゃいました。池の中に咲いている蓮はすの花は、みんな玉のようにまっ白で、そのまん中にある金色きんいろの蕊ずいからは、何とも云えない好よい匂においが、絶間たえまなくあたりへ溢あふれて居ります。極楽は丁度朝なのでございましょう。'},
        {id: 2, title: '無題2', tags: ["test", "hoge", "foo"], body: '　ある日の事でございます。御釈迦様おしゃかさまは極楽の蓮池はすいけのふちを、独りでぶらぶら御歩きになっていらっしゃいました。池の中に咲いている蓮はすの花は、みんな玉のようにまっ白で、そのまん中にある金色きんいろの蕊ずいからは、何とも云えない好よい匂においが、絶間たえまなくあたりへ溢あふれて居ります。極楽は丁度朝なのでございましょう。'},
        {id: 3, title: '無題3', tags: ["test", "hoge", "foo"], body: '　ある日の事でございます。御釈迦様おしゃかさまは極楽の蓮池はすいけのふちを、独りでぶらぶら御歩きになっていらっしゃいました。池の中に咲いている蓮はすの花は、みんな玉のようにまっ白で、そのまん中にある金色きんいろの蕊ずいからは、何とも云えない好よい匂においが、絶間たえまなくあたりへ溢あふれて居ります。極楽は丁度朝なのでございましょう。'},
        {id: 4, title: '無題4', tags: ["test", "hoge", "foo"], body: '　ある日の事でございます。御釈迦様おしゃかさまは極楽の蓮池はすいけのふちを、独りでぶらぶら御歩きになっていらっしゃいました。池の中に咲いている蓮はすの花は、みんな玉のようにまっ白で、そのまん中にある金色きんいろの蕊ずいからは、何とも云えない好よい匂においが、絶間たえまなくあたりへ溢あふれて居ります。極楽は丁度朝なのでございましょう。'},
        {id: 5, title: '無題5', tags: ["test", "hoge", "foo"], body: '　ある日の事でございます。御釈迦様おしゃかさまは極楽の蓮池はすいけのふちを、独りでぶらぶら御歩きになっていらっしゃいました。池の中に咲いている蓮はすの花は、みんな玉のようにまっ白で、そのまん中にある金色きんいろの蕊ずいからは、何とも云えない好よい匂においが、絶間たえまなくあたりへ溢あふれて居ります。極楽は丁度朝なのでございましょう。'},
        {id: 6, title: '無題6', tags: ["test", "hoge", "foo"], body: '　ある日の事でございます。御釈迦様おしゃかさまは極楽の蓮池はすいけのふちを、独りでぶらぶら御歩きになっていらっしゃいました。池の中に咲いている蓮はすの花は、みんな玉のようにまっ白で、そのまん中にある金色きんいろの蕊ずいからは、何とも云えない好よい匂においが、絶間たえまなくあたりへ溢あふれて居ります。極楽は丁度朝なのでございましょう。'},
        {id: 7, title: '無題7', tags: ["test", "hoge", "foo"], body: '　ある日の事でございます。御釈迦様おしゃかさまは極楽の蓮池はすいけのふちを、独りでぶらぶら御歩きになっていらっしゃいました。池の中に咲いている蓮はすの花は、みんな玉のようにまっ白で、そのまん中にある金色きんいろの蕊ずいからは、何とも云えない好よい匂においが、絶間たえまなくあたりへ溢あふれて居ります。極楽は丁度朝なのでございましょう。'},
        {id: 8, title: '無題8', tags: ["test", "hoge", "foo"], body: '　ある日の事でございます。御釈迦様おしゃかさまは極楽の蓮池はすいけのふちを、独りでぶらぶら御歩きになっていらっしゃいました。池の中に咲いている蓮はすの花は、みんな玉のようにまっ白で、そのまん中にある金色きんいろの蕊ずいからは、何とも云えない好よい匂においが、絶間たえまなくあたりへ溢あふれて居ります。極楽は丁度朝なのでございましょう。'},
        {id: 9, title: '無題9', tags: ["test", "hoge", "foo"], body: '　ある日の事でございます。御釈迦様おしゃかさまは極楽の蓮池はすいけのふちを、独りでぶらぶら御歩きになっていらっしゃいました。池の中に咲いている蓮はすの花は、みんな玉のようにまっ白で、そのまん中にある金色きんいろの蕊ずいからは、何とも云えない好よい匂においが、絶間たえまなくあたりへ溢あふれて居ります。極楽は丁度朝なのでございましょう。'},
        {id: 10, title: '無題10', tags: ["test", "hoge", "foo"], body: '　ある日の事でございます。御釈迦様おしゃかさまは極楽の蓮池はすいけのふちを、独りでぶらぶら御歩きになっていらっしゃいました。池の中に咲いている蓮はすの花は、みんな玉のようにまっ白で、そのまん中にある金色きんいろの蕊ずいからは、何とも云えない好よい匂においが、絶間たえまなくあたりへ溢あふれて居ります。極楽は丁度朝なのでございましょう。'},
      ],
      max_page: 1,
      limit: 10,
      offset: 0,
      all_item_count: 0,
    }
  },
  mounted() {
  },
  watch: {
  },
}
</script>

<style scoped>

main {
  width: 90%;
  margin: 0 auto;
}

#page-title {
  font-size: 2em;
  margin: 10px 0;
}

#novel-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.novel-list__item {
  width: calc(100% / 3 - 40px);
  min-width: 300px;
  margin: 10px 5px;
  padding: 5px;
  /* border: 1px solid var(--text-sub2-color); */
  border-radius: 5px;
  background-color: var(--card-item-color);
  box-shadow: 2px 4px 4px var(--shadow-color);
  transition: all 0.1s ease-out;
}
.novel-list__item:hover {
  box-shadow: 0 0;
}

@media screen and (max-width: 990px) {
  .novel-list__item {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
  }
}

</style>