<template>
  <div>
    list view
    <router-link :to="{name: 'poll-detail', params: {id: 1}}">go to detail</router-link>
  </div>
</template>

<script>
  export default {
    name: 'poll-list-view'
  }
</script>
