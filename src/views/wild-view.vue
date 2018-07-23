<template>
  <div></div>
</template>

<script>
  export default {
    name: 'poll-list-view',
    created () {
      this.$router.replace({
        name: 'poll-list'
      })
    }
  }
</script>
