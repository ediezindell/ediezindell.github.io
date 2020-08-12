<template>
  <div id="form">
    <table>
      <tr>
        <th></th>
        <th></th>
        <th>生年月日</th>
        <th>年齢</th>
      </tr>
      <tr v-for="p in family" v-bind:key="p.id">
        <td>
          <input type="checkbox" id="">
        </td>
        <td>{{ p.name }}</td>
        <td>
          <input type="text" v-model="p.birthday" placeholder="yyyy/mm/dd">
        </td>
        <td>
          {{ calcAge(p.birthday) }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "PersonForm",
  props: [""],
  components: {
    // Person,
  },
  methods: {
    calcAge: function(birthday) {
      return birthday
    }
  },
  data: function() {
    return {
      family: [
        {id: 1, name: "世帯主", birthday: '', required: true},
        {id: 2, name: "配偶者", birthday: '', required: true},
        {id: 3, name: "子供1", birthday: '', required: false},
        {id: 4, name: "子供2", birthday: '', required: false},
        {id: 5, name: "子供3", birthday: '', required: false},
      ],
    }
  }
}
</script>

<style scoped>
#form {
  margin: 0 auto;
  width: 80%;
}
</style>