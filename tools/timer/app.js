// ローカルストレージへの保存
let STORAGE_KEY = 'timer'
let projectStorage = {
  fetch: function() {
    let projects = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    projects.forEach(function(project, index) {
      project.id = index
    })
    projectStorage.uid = projects.length
    return projects
  },
  save: function(projects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
  }
}
let HISTRY_STORAGE_KEY = 'history'
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
    username: '',
    projects: [
    ],
    histories: [
    ],
    buttons: [
      {value: 0, label: 'Start'},
      {value: 1, label: 'End'}
    ],
    current: -1,
    countup: 0,
    runningIndex: -1,
    idling: ''
  },
  methods: {
    // project 追加の処理
    doAdd: function(event, value) {
      var project_name = this.$refs.project_name

      if (!project_name.value.length) {
        return
      }

      this.projects.push({
        id: ++projectStorage.uid,
        project_name: project_name.value,
        totalSec: 0,
        dispTime: '00:00:00',
        state: 0
      })
      // フォーム要素を空にする
      project_name.value = ''
    },
    registHistory: function(project_name, type) {
      let timestamp = app.getTimestamp()
      this.histories.push({
        id: ++historyStorage.uid,
        project_name: project_name,
        type: type,
        created_at: timestamp
      })
    },
    doChangeState: function(item) {
      let index = this.projects.indexOf(item)
      let type = item.state ? 1 : 0
      app.registHistory(item.project_name, type)
      // 開始
      if(type == 0) {
        this.countUp(item)
      }
      // 終了
      else{
        this.timerStop(item)
      }
    },
    doRemove: function(item) {
      app.timerStop(item)
      let index = this.projects.indexOf(item)
      this.projects.splice(index, 1)
    },
    doClear: function(item) {
      app.timerStop(item)
      item.totalSec = 0
      item.dispTime = '00:00:00'
    },
    allHistoryClear: function() {
      this.histories = []
    },
    countUp: function(item) {
      let index = this.projects.indexOf(item)
      this.runningId = index
      let startTime = Date.now() - item.totalSec
      let count
      let t = this

      count = function () {
        // 他indexがStartしたら終わる
        if(t.runningId != index) {
          item.state = 0
          return
        }
        this.countup = Date.now() - startTime
        let hour = Math.floor(countup / 3600000)
        let min = Math.floor(countup / 60000)
        let sec = Math.floor(countup % 60000 / 1000)
        // let msc = countup % 1000
        hour = ('0' + hour).slice(-2)
        min = ('0' + min).slice(-2)
        sec = ('0' + sec).slice(-2)
        // msc = ('00' + msc).slice(-3)
        // item.dispTime = `${hour}:${min}:${sec}.${msc}`
        item.dispTime = `${hour}:${min}:${sec}`
        item.totalSec = this.countup
        this.idling = setTimeout(count, 10)
      }
      count()
      item.state = 1
    },
    timerStop: function(item) {
      item.state = 0
      this.runningId = -1
      clearTimeout(this.idling)
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
    }
  },
  watch: {
    projects: {
      handler: function(projects) {
        projectStorage.save(projects)
      },
      deep: true
    },
    histories: {
      handler: function(histories) {
        historyStorage.save(histories)
      },
      deep: true
    }
  },
  created() {
    this.projects = projectStorage.fetch()
    this.histories = historyStorage.fetch()
  },
  computed: {
    buttonLabel() {
      return this.buttons.reduce(function(a, b) {
        return Object.assign(a, {[b.value]: b.label})
      }, {})
    }
  }
})
