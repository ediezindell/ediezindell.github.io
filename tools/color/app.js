// ローカルストレージへの保存
let HISTRY_STORAGE_KEY = 'color_history'
let historyStorage = {
  fetch: function() {
    let histories = JSON.parse(
      localStorage.getItem(HISTRY_STORAGE_KEY) || '[]'
    )
    histories.forEach(function(project, index) {
      project.id = index
    })
    historyStorage.uid = histories.length
    return histories
  },
  save: function(projects) {
    localStorage.setItem(HISTRY_STORAGE_KEY, JSON.stringify(projects))
  }
}

let app = new Vue({
  el: '#app',
  data: {
    histories: [
    ],
    bg_color: 'fff',
    color: '000',
  },
  methods: {
    doChange: function(event, value) {
      var bg_color = this.$refs.bg_color.value
      var color = this.$refs.color.value
      if (!bg_color.length || !color.length) {
        return
      }
      this.bg_color = bg_color
      this.color = color
      this.registHistory()
    },
    registHistory: function() {
      let timestamp = app.getTimestamp()
      this.histories.push({
        id: ++historyStorage.uid,
        bg_color: this.bg_color,
        color: this.color,
        created_at: timestamp
      })
    },
    getTimestamp: function() {
      let date = new Date()
      let Y = date.getFullYear()
      let m = ('0' + date.getMonth() + 1).slice(-2)
      let d = ('0' + date.getDate()).slice(-2)
      let H = ('0' + date.getHours()).slice(-2)
      let i = ('0' + date.getMinutes()).slice(-2)
      let s = ('0' + date.getSeconds()).slice(-2)
      return Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s
    },
    checkColorCode : function(colorCode) {
      return true
    }
  },
  watch: {
    histories: {
      handler: function(histories) {
        historyStorage.save(histories)
      },
      deep: true
    }
  },
  created() {
    this.histories = historyStorage.fetch()
  },
  computed: {
    // 配列の要素順番を逆順にする
    reverseHistories() {
      return this.histories.slice().reverse();
    },
    styles() {
      if(this.checkColorCode(this.color) && this.checkColorCode(this.bg_color)) {
        this.customStyle = {
          'color': '#' + this.color,
          'background-color': '#' + this.bg_color
        }
      }
      return this.customStyle
    },
  }
})
