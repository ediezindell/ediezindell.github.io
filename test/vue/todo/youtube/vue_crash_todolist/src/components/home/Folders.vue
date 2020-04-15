<template>
  <router-link tag="div" class="folder-item" :to="{name: 'Children', params: {id: folder.id}}" replace>{{folder.name}}</router-link>
</template>

<script>
export default {
  name: "Folders",
  props: ["folder"],
}
</script>

<style scoped>
.folder-item {
  padding: 10px;
  background-color: #eee;
  border-bottom: 1px #ccc dotted;
  user-select: none;
}
.folder-item {
  cursor: pointer;
  display: block;
}

</style>