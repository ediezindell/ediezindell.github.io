<template>
  <div>
    <!-- <a @click="$router.go(-1)">back</a> -->
    <LinkButton :linkname="backLinkName" :msg="backLinkMsg"></LinkButton>
    <article id="main">
      <h1 id="title">『{{ ctitle }}』</h1>
      <Tags :tags="tags"></Tags>
      <div v-html="cbody" id="novelBody" class="center"></div>
    </article>
  </div>
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
  },
  computed: {
    cbody: function() {
      return this.body.replace(/\n/g, '<br/>')
    },
    ctitle: function() {
      return `無題${this.id}`
    },
  },
  data: function () {
    return {
      tags: [
        "hoge", "foo",
      ],
      body: "　ある日の事でございます。御釈迦様おしゃかさまは極楽の蓮池はすいけのふちを、独りでぶらぶら御歩きになっていらっしゃいました。池の中に咲いている蓮はすの花は、みんな玉のようにまっ白で、そのまん中にある金色きんいろの蕊ずいからは、何とも云えない好よい匂においが、絶間たえまなくあたりへ溢あふれて居ります。極楽は丁度朝なのでございましょう。\n　やがて御釈迦様はその池のふちに御佇おたたずみになって、水の面おもてを蔽おおっている蓮の葉の間から、ふと下の容子ようすを御覧になりました。この極楽の蓮池の下は、丁度地獄じごくの底に当って居りますから、水晶すいしようのような水を透き徹して、三途さんずの河や針の山の景色が、丁度覗のぞき眼鏡めがねを見るように、はっきりと見えるのでございます。\n　するとその地獄の底に、※(「特のへん＋廴＋聿」、第3水準1-87-71)陀多かんだたと云う男が一人、ほかの罪人と一しょに蠢うごめいている姿が、御眼に止まりました。この※(「特のへん＋廴＋聿」、第3水準1-87-71)陀多と云う男は、人を殺したり家に火をつけたり、いろいろ悪事を働いた大泥坊でございますが、それでもたった一つ、善い事を致した覚えがございます。と申しますのは、ある時この男が深い林の中を通りますと、小さな蜘蛛くもが一匹、路ばたを這はって行くのが見えました。そこで※(「特のへん＋廴＋聿」、第3水準1-87-71)陀多は早速足を挙げて、踏み殺そうと致しましたが、「いや、いや、これも小さいながら、命のあるものに違いない。その命を無暗むやみにとると云う事は、いくら何でも可哀そうだ。」と、こう急に思い返して、とうとうその蜘蛛を殺さずに助けてやったからでございます。\n　御釈迦様は地獄の容子を御覧になりながら、この※(「特のへん＋廴＋聿」、第3水準1-87-71)陀多には蜘蛛を助けた事があるのを御思い出しになりました。そうしてそれだけの善い事をした報むくいには、出来るなら、この男を地獄から救い出してやろうと御考えになりました。幸い、側を見ますと、翡翠ひすいのような色をした蓮の葉の上に、極楽の蜘蛛が一匹、美しい銀色の糸をかけて居ります。御釈迦様はその蜘蛛の糸をそっと御手に御取りになって、玉のような白蓮しらはすの間から、遥か下にある地獄の底へ、まっすぐにそれを御下おろしなさいました。",
      backLinkName: "Home",
      backLinkMsg: "back",
    }
  },
  mounted() {
  },
  watch: {
  },
}
</script>

<style scoped>
#main {
  display: block;
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  max-width: 580px;
}
#title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--text-sub-color);
}

#novelBody {
  padding: 10px;
  line-height: 2em;
}
#novelBody.center {
  text-align: center;
}
</style>