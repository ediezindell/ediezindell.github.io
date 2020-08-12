<template>
  <div>
    <table id="wantslist">
      <thead>
        <tr>
          <th></th>
          <th>#</th>
          <th>やりたいこと</th>
          <th>詳細</th>
        </tr>
      </thead>
      <tr v-for="want in wants" :key="want.id">
        <td>
          <input type="checkbox" v-model="want.done">
        </td>
        <td>
          {{want.id}}
        </td>
        <td>
          {{want.title}}
        </td>
        <td>
          {{want.detail}}
        </td>
      </tr>
      <tr v-if="wants.length < 100" id="nextwant">
        <td>
          <input type="submit" id="addbtn" value="追加">
        </td>
        <td>
          {{wants.length+1}}
        </td>
        <td>
          <input type="text" placeholder="title">
        </td>
        <td>
          <input type="text" placeholder="title">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: "WantsList",
  props: ["wants"],
  components: {
  },
  methods: {
  },
  data: function() {
    return {
      status: {
        yet: 1,
        done: 2,
      }
    }
  },
  computed: {
    // dispStatus: function() {
    //   let self = this
    //   return function(status_id) {
    //     switch (status_id) {
    //       case self.status.yet:
    //         return "未達成";
    //       case self.status.done:
    //         return "達成済"
    //       default:
    //         return status_id;
    //     }
    //   }
    // }
  }
}
</script>

<style scoped>
  table#wantslist {
    width: 80%;
    margin: 0 auto;
  }
  input {
    margin-bottom: 0;
  }
  input[type=chechbox] {
    width: 20px;
    height: 20px;
  }
  #addbtn {
    /* border: 1px solid #383;
    color: #383;
    background-color: #cfc; */
  }
</style>