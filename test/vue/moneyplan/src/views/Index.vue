<template>
  <main id="main" role="main">
    <input type="text" v-model="dispUntil">
    <button @click="dispChart()">再計算</button>
    <Chart v-if="inputDone" :labels="labels" :datasets="datasets"></Chart>
    <article id="formWrapper" v-if="!inputDone">
      <section>
        <h2>家族について</h2>
        <span class="notice">{{ notice }}</span>
        <table id="familyFormTable">
          <tr>
            <th></th>
            <th></th>
            <th>生年月日</th>
            <th>年齢</th>
            <th>学校</th>
          </tr>
          <tr v-for="person in family" v-bind:key="person.id">
            <td>
              <input type="checkbox" placeholder="20200702" v-model="person.active">
            </td>
            <td>
              {{ person.name }}
            </td>
            <td>
              <input type="text" placeholder="2020-07-02" v-model="person.birth" required>
            </td>
            <td>
              <span v-if="person.birth.length == 10">
                {{ nowAge(person.birth) }}歳
              </span>
            </td>
            <td>
              <select v-model="person.school" v-if="person.name.indexOf('子供') === 0">
                <option v-for="item in schools" v-bind:key="item.id" v-bind:value="item">
                  {{ item }}
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <button @click="addFamily(newFamily)">追加</button>
            </td>
            <td>
              <input type="text" placeholder="子供1" v-model="newFamily.name" required>
            </td>
            <td>
              <input type="text" placeholder="2020-07-02" v-model="newFamily.birth" required>
            </td>
            <td>
              <span v-if="newFamily.birth.length == 10">
                {{ nowAge(newFamily.birth) }}歳
              </span>
            </td>
          </tr>
        </table>
      </section>
      <section>
        <h2>収入について</h2>
        <table id="incomeFormTable">
          <tr>
            <th>name</th>
            <th>年収(万円)</th>
            <th>昇給(年)</th>
            <th>何年まで貰えるか</th>
            <th></th>
          </tr>
          <tr v-for="item in income" v-bind:key="item.id">
            <td>
              <input type="text" placeholder="世帯主給与" v-model="item.name" required>
            </td>
            <td>
              <input type="text" placeholder="450" v-model="item.pay" required>
            </td>
            <td>
              <input type="text" placeholder="10" v-model="item.up" required>
            </td>
            <td>
              <input type="text" placeholder="2030" v-model="item.until" required>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <input type="text" placeholder="世帯主給与" v-model="newIncomeItem.name" required>
            </td>
            <td>
              <input type="text" placeholder="450" v-model="newIncomeItem.pay" required>
            </td>
            <td>
              <input type="text" placeholder="10" v-model="newIncomeItem.up" required>
            </td>
            <td>
              <input type="text" placeholder="2030" v-model="newIncomeItem.until" required>
            </td>
            <td>
              <button @click="addIncome(newIncomeItem)">追加</button>
            </td>
          </tr>
        </table>
      </section>
      <section>
        <h2>ローンについて</h2>
        <table id="loanFormTable">
          <tr>
            <th>name</th>
            <th>年に支払うお金(万円)</th>
            <th>何年まで払うか</th>
            <th></th>
          </tr>
          <tr v-for="item in loan" v-bind:key="item.id">
            <td>
              <input type="text" placeholder="住宅ローン" v-model="item.name" required>
            </td>
            <td>
              <input type="text" placeholder="100" v-model="item.pay" required>
            </td>
            <td>
              <input type="text" placeholder="2030" v-model="item.until" required>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <input type="text" placeholder="住宅ローン" v-model="newLoanItem.name" required>
            </td>
            <td>
              <input type="text" placeholder="100" v-model="newLoanItem.pay" required>
            </td>
            <td>
              <input type="text" placeholder="2030" v-model="newLoanItem.until" required>
            </td>
            <td>
              <button @click="addLoan(newLoanItem)">追加</button>
            </td>
          </tr>
        </table>
      </section>
      <section>
        <h2>生活費・現在の貯蓄について</h2>
        <table id="seikatsuhiFormTable">
          <tr>
            <th>
              貯蓄
            </th>
            <td>
              <input type="text" placeholder="100" v-model="chochiku" required>
              万
            </td>
          </tr>
          <tr>
            <th>
              月の生活費
            </th>
            <td>
              <input type="text" placeholder="20" v-model="seikatsuhi" required>
              万/月
            </td>
          </tr>
        </table>
      </section>
      <section>
        <h2>定期支出について</h2>
        <table id="teikishishutsuFormTable">
          <tr>
            <th>name</th>
            <th>1回にかかるお金(万円)</th>
            <th>何年ごとに払うか</th>
            <th></th>
          </tr>
          <tr v-for="item in event" v-bind:key="item.id">
            <td>
              <input type="text" placeholder="家族旅行" v-model="item.name" required>
            </td>
            <td>
              <input type="text" placeholder="20" v-model="item.pay" required>
            </td>
            <td>
              <input type="text" placeholder="1" v-model="item.until" required>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <input type="text" placeholder="家族旅行" v-model="newEventItem.name" required>
            </td>
            <td>
              <input type="text" placeholder="20" v-model="newEventItem.pay" required>
            </td>
            <td>
              <input type="text" placeholder="1" v-model="newEventItem.until" required>
            </td>
            <td>
              <button @click="addEvent(newEventItem)">追加</button>
            </td>
          </tr>
        </table>
      </section>
    </article>
    <button v-if="!inputDone" @click="dispChart()">再計算</button>
    <button v-if="inputDone" @click="reDispForm()">設定を変更する</button>
  </main>
</template>

<script>
import Chart from '@/components/Chart'
import { ja } from 'vuejs-datepicker/dist/locale'

export default {
  name: "Index",
  components: {
    Chart,
  },
  methods: {
    reDispForm() {
      this.inputDone = false
    },
    nowAge(birthday, base='') {
      let today = base.length == 0 ?new Date() : new Date(base)
      // console.log(today)
      let birthdayObj = new Date(birthday)
      let thisYearBirthday = new Date(today.getFullYear() + '-' + (birthdayObj.getMonth() + 1) + '-' + birthdayObj.getDate())
      let age = today.getFullYear() - birthdayObj.getFullYear();
      if(isNaN(age)) {
        this.notice = '生年月日が不正です'
        return '';
      }
      this.notice = ''
      return (today < thisYearBirthday) ? age - 1 : age;
    },
    date(format, str='') {
      let dateObj = str.length == 0 ? new Date() : new Date(str)
      let Y = dateObj.getFullYear()
      let m = ("0" + (dateObj.getMonth() + 1)).slice(-2)
      let d = ("0" + dateObj.getDate()).slice(-2)
      return format.replace('Y', Y).replace('m', m).replace('d', d)
    },
    addFamily(newFamily) {
      var newItem = newFamily
      newItem['id'] = this.family.length + 1
      this.newFamily = {
        name: "",
        birth: "",
      }
    },
    addIncome(newIncomeItem) {
      var newItem = newIncomeItem
      newItem['id'] = this.income.length + 1
      this.income.push(newItem)
      this.newIncomeItem = {
        name: "",
        pay: "",
        up: "",
        until: "",
      }
    },
    addLoan(newLoanItem) {
      var newItem = newLoanItem
      newItem['id'] = this.loan.length + 1
      this.loan.push(newItem)
      this.newLoanItem = {
        name: "",
        pay: 0,
        until: 2020,
      }
    },
    addEvent(newEventItem) {
      var newItem = newEventItem
      newItem['id'] = this.event.length + 1
      this.event.push(newItem)
      this.newEventItem = {
        name: "",
        pay: 0,
        by: 1,
      }
    },
    dispChart() {
      this.labels = []
      this.dataset = []

      let now = new Date()
      var thisyear = now.getFullYear()
      var chochikuObj = {
        label: '貯蓄',
        type: 'line',
        data: [],
        borderColor: '#00f',
        backgroundColor: '#88f',
        fill: true,
      }
      var shishutsuObj = {
        label: '支出',
        type: "line",
        data: [],
        borderColor: "#f00",
        fill: false,
      }
      var gakuhiObj = {
        label: '学費',
        type: "line",
        data: [],
        borderColor: "#0ff",
        fill: false,
      }
      var incomeObj = {
        label: '収入',
        type: "line",
        data: [],
        borderColor: "#ff0",
        fill: false,
      }
      var shushiObj = {
        label: '収支',
        type: "line",
        data: [],
        borderColor: "#f0f",
        fill: false,
      }
      var houseLoanObj = {
        label: '住宅ローン残高',
        type: "line",
        data: [],
        borderColor: "#fff",
        backgroundColor: "#aaa",
        fill: true,
      }

      var chochiku = Number(this.chochiku)
      var income = 0
      var shishutsu = 0
      var shushi = 0
      var houseLoan = 0
      this.loan.forEach(item => {
        if(item.name == '住宅ローン') {
          houseLoan = Number(item.pay) * Number(item.until - thisyear)
        }
      })

      this.income.forEach(item => {
        income += Number(item.pay)
      })

      for(var i = 0; i < this.dispUntil; i++) {
        var year = thisyear + i
        this.labels.push(year)

        this.income.filter(
          item => Number(year) <= Number(item.until)
        ).forEach(item => {
          income = Number(item.pay) + Number(item.up * i)
          // console.log(`income ${year}: ${income}`)
        })
        shishutsu = this.seikatsuhi * 12 * (1 + (i * 0.02))

        var gakuhi = 0
        this.family.filter(
          item => item.name.indexOf('子供') === 0
        ).forEach(item => {
          var age = Number(this.nowAge(item.birth, new Date(`${year}-01-01`)))
          if(0 <= age && age <= 12) {
            income += Number(this.kodomoteate[age])
          }
          Object.keys(this.gakuhi).forEach(key => {
            if(Number(this.gakuhi[key].start) <= age && age <= Number(this.gakuhi[key].end)) {
              // console.log(item.school)
              var schoolObj = JSON.parse(item.school)
              // console.log(schoolObj)
              var nowSchool = schoolObj[key]
              // console.log(nowSchool)
              this.gakuhi[key].types.filter(
                typeval => typeval.type == nowSchool
              ).forEach(gakuhival => {
                // console.log(gakuhival)
                var paykey = Number(age) - Number(this.gakuhi[key].start)
                // console.log(paykey)
                if(isNaN(gakuhival.pay[paykey])) {
                  console.log(age)
                  console.log(this.gakuhi[key].start)
                  console.log(paykey)
                  console.log(gakuhival.pay)
                  console.log(gakuhival.pay[paykey])
                }
                gakuhi += Number(gakuhival.pay[paykey])
              })
            }
          })
        })
        console.log(`gakuhi ${year}: ${gakuhi}`)
        shishutsu += Number(gakuhi)

        this.loan.filter(
          item => Number(year) <= Number(item.until)
        ).forEach(item => {
          shishutsu += Number(item.pay)
          if(item.name == '住宅ローン') {
            houseLoan -= Number(item.pay)
          }
        })
        if(houseLoan < 0) {
          houseLoan = 0
        }

        shushi = Number(income) - Number(shishutsu)

        chochiku += Number(shushi)
        // console.log(`chochiku ${year}: ${chochiku}`)
        // console.log(`income ${year}: ${income}`)
        console.log(`shishutsu ${year}: ${shishutsu}`)
        // console.log(`shushi ${year}: ${shushi}`)
        // console.log(`houseLoan ${year}: ${houseLoan}`)

        chochikuObj.data.push(chochiku)
        incomeObj.data.push(income)
        shishutsuObj.data.push(shishutsu)
        gakuhiObj.data.push(gakuhi)
        shushiObj.data.push(shushi)
        houseLoanObj.data.push(houseLoan)
      }

      this.datasets = [
        chochikuObj,
        shishutsuObj,
        incomeObj,
        shushiObj,
        houseLoanObj,
        gakuhiObj,
      ]
      this.inputDone = true
    },
    saveToLocalStorageObj(key, val) {
      if(key == 'family') {
        // console.log(val)
      }
      const parsed = JSON.stringify(val)
      localStorage.setItem(key, parsed)
    },
    saveToLocalStorageStr(key, val) {
      localStorage.setItem(key, val)
      console.log('save: ' + key + ' => ' + val)
    },
  },
  computed: {
    // dispFamily: function() {
    //   return this.family.filter(
    //     person => person.active == true
    //   )
    // },
    // nextFamily: function() {
    //   return this.family.filter(
    //     person => person.active == false
    //   ).shift()
    // }
    schools: function() {
      var schools = []
      this.gakuhi['小学校'].types.forEach(es => {
        this.gakuhi['中学校'].types.forEach(ms => {
          this.gakuhi['高校'].types.forEach(hs => {
            this.gakuhi['大学'].types.forEach(co => {
              schools.push(JSON.stringify({
                '小学校': es.type,
                '中学校': ms.type,
                '高校': hs.type,
                '大学': co.type,
              }))
            })
          })
        })
      })
      return schools
    }
  },
  data: function () {
    return {
      dispUntil: 40,
      ja: ja,
      kodomoteate: {
        0: 18, 1: 18, 2: 18,
        3: 12, 4: 12, 5: 12, 6: 12, 7: 12, 8: 12, 9: 12, 10: 12, 11: 12, 12: 12, 13: 12, 14: 12, 15: 12,
      },
      gakuhi: {
        '小学校': {
          types: [
            {
              type: '公立',
              pay: [32.1281, 32.1281, 32.1281, 32.1281, 32.1281, 32.1281],
            },
            {
              type: '私立',
              pay: [159.8691, 159.8691, 159.8691, 159.8691, 159.8691, 159.8691],
            },
          ],
          start: 6,
          end: 11,
        },
        '中学校': {
          types: [
            {
              type: '公立',
              pay: [48.8397, 48.8397, 48.8397],
            },
            {
              type: '私立',
              pay: [140.6433, 140.6433, 140.6433],
            },
          ],
          start: 12,
          end: 14,
        },
        '高校': {
          types: [
            {
              type: '公立',
              pay: [45.7380, 45.7380, 45.7380],
            },
            {
              type: '私立',
              pay: [96.9911, 96.9911, 96.9911],
            },
          ],
          start: 15,
          end: 17,
        },
        '大学': {
          types: [
            {
              type: '国公立',
              pay: [194.9000, 114.8000, 114.8000, 114.8000],
            },
            {
              type: '私立文系',
              pay: [250.5000, 160.1000, 160.1000, 160.1000],
            },
            {
              type: '私立理系',
              pay: [270.8000, 185.3000, 185.3000, 185.3000],
            },
          ],
          start: 18,
          end: 21,
        },
      },
      chochiku: 0,
      notice: '',
      inputDone: false,
      family: [],
      seikatsuhi: 0,
      newFamily: {
        name: "",
        birth: "",
        active: true,
      },
      income: [],
      newIncomeItem: {
        name: "",
        pay: 0,
        up: 0,
        until: 2020,
      },
      loan: [],
      newLoanItem: {
        name: "",
        pay: 0,
        until: 2020,
      },
      event: [],
      newEventItem: {
        name: "",
        pay: 0,
        by: 1,
      },
      labels: [],
      datasets: [],
    }
  },
  mounted() {
    let loadKeysObj = ['family', 'loan', 'event', 'income',]
    loadKeysObj.forEach(key => {
      // localStorage.removeItem(key);
      if(localStorage.getItem(key)) {
        try {
          JSON.parse(localStorage.getItem(key)).forEach(item => {
            item.id = this[key].length + 1
            if(key == 'family') {
              console.log(item.school)
            }
            this[key].push(item)
          })
        } catch(e) {
          localStorage.removeItem(key);
        }
      }
    })
    let loadKeysStr = ['seikatsuhi', 'chochiku', 'dispUntil',]
    loadKeysStr.forEach(key => {
      // localStorage.removeItem(key);
      console.log(localStorage.getItem(key))
      if(localStorage.getItem(key)) {
        try {
          this[key] = localStorage.getItem(key)
        } catch(e) {
          localStorage.removeItem(key);
        }
      }
    })
  },
  watch: {
    family: {
      handler: function (newData) {
        this.saveToLocalStorageObj('family', newData)
      },
      deep: true,
    },
    income: {
      handler: function (newData) {
        this.saveToLocalStorageObj('income', newData)
      },
      deep: true,
    },
    loan: {
      handler: function (newData) {
        this.saveToLocalStorageObj('loan', newData)
      },
      deep: true,
    },
    event: {
      handler: function (newData) {
        this.saveToLocalStorageObj('event', newData)
      },
      deep: true,
    },
    seikatsuhi(newData) {
      this.saveToLocalStorageStr('seikatsuhi', newData)
    },
    chochiku(newData) {
      this.saveToLocalStorageStr('chochiku', newData)
    },
    dispUntil(newData) {
      this.saveToLocalStorageStr('dispUntil', newData)
    },
  }
}
</script>

<style scoped>
#formWrapper {
  width: 80%;
  margin: 0 auto;
}
#formWrapper h1,
#formWrapper h2,
#formWrapper h3,
#formWrapper h4,
#formWrapper h5,
#formWrapper h6 {
  text-align: left;
}
#familyFormTable {
  margin: 0 auto;
}
article {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
section {
  /* width: 45%; */
  padding: 1em;
  margin: 1em;
  border: dotted 1px #000;
}
div {
  /* display: inline-block; */
}
.notice {
  color: red;
  font-weight: bold;
}
input[type=checkbox] {
  width: 1.5em;
  height: 1.5em;
}
</style>
