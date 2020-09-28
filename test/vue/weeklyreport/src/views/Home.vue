<template>
  <div>
    <div v-for="p in projects" v-bind:key="p.id">
      <span class="project-name">{{ p.name }}</span>
      <label class="checkbox-wrapper">
        <input v-model="p.dev" type="checkbox">
        開発
      </label>
      <label class="checkbox-wrapper">
        <input v-model="p.ope" type="checkbox">
        運用
      </label>

      <div v-show="p.dev" class="form-wrapper">
        <h1>開発</h1>
        <table v-for="item in p.devitems" v-bind:key="item.id">
          <ProjectItemDetail :item="item"></ProjectItemDetail>
        </table>
        <button @click="additem(p.devitems)">
          追加
        </button>
      </div>

      <div v-show="p.ope" class="form-wrapper">
        <h1>運用</h1>
        <table v-for="item in p.opeitems" v-bind:key="item.id">
          <ProjectItemDetail :item="item"></ProjectItemDetail>
        </table>
        <button @click="additem(p.opeitems)">
          追加
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import ProjectItemDetail from '@/components/ProjectItemDetail'

export default {
  name: "Home",
  props: {
//    hogehoge: {
//      type: String,
//      required: false,
//    }
  },
  components: {
    ProjectItemDetail,
  },
  methods: {
    additem: function(items) {
      let newitem = Object.assign({}, this.newitem)
      newitem.id = items.length + 1
      console.log(`newid: ${newitem.id}`)
      items.push(newitem)
      console.log(items)
    }
  },
  computed: {
  },
  data: function () {
    return {
      projects: [
        {
          id: 1,
          disp: false, dev: true, ope: true,
          devitems: [
            {
              id: 0,
              name: "GW対応",
              progress: 0,
              time: 0,
            }
          ],
          opeitems: [
            {
              id: 1,
              name: "モニタリング",
              progress: 0,
              time: 0,
            },
            {
              id: 2,
              name: "FOTA配信",
              progress: 0,
              time: 0,
            }
          ],
          name: '損保ジャパン様　スマイリングロード',
        },
        {
          id: 2,
          disp: false, dev: true, ope: true,
          devitems: [
            {
              id: 1,
              name: "案件名",
              progress: 0,
              time: 0,
            }
          ],
          opeitems: [

          ],
          name: '損保ジャパン様　ポータブルスマイリングロード',
        },
        {
          id: 3,
          disp: false, dev: true, ope: true,
          devitems: [

          ],
          opeitems: [
            {
              id: 1,
              name: "案件名",
              progress: 0,
              time: 0,
            }
          ],
          name: '損保ジャパン様　ドライビング！',
        },
        {
          id: 4,
          disp: false, dev: true, ope: true,
          devitems: [

          ],
          opeitems: [

          ],
          name: 'メットライフ生命様　P-Navi',
        },
        {
          id: 5,
          disp: false, dev: true, ope: true,
          devitems: [

          ],
          opeitems: [

          ],
          name: 'TOTO様、大建工業様、YKK AP様　TDYショールームシステム',
        },
        {
          id: 6,
          disp: false, dev: true, ope: true,
          devitems: [

          ],
          opeitems: [

          ],
          name: 'YKK AP様　ショールームシステム(YSS)',
        },
        {
          id: 7,
          disp: false, dev: true, ope: true,
          devitems: [

          ],
          opeitems: [

          ],
          name: 'ジュピターテレコム様　J:COMニュース',
        },
        {
          id: 8,
          disp: false, dev: true, ope: true,
          devitems: [

          ],
          opeitems: [

          ],
          name: 'ジュピターテレコム様　J:COMVOD',
        },
      ],
      newitem: {
        id: 0,
        name: "案件名",
        progress: 0,
        time: 0,
      }
    }
  },
  mounted() {
  },
  watch: {
  },
}
</script>

<style scoped>
.checkbox-wrapper {
  display: inline;
}
.form-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>