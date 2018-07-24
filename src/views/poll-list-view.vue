<template>
  <div>
    <div v-if="!polls">loading...</div>
    <template v-else>
      <poll-card :poll-data="polls[0]"></poll-card>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'poll-list-view',

    computed: {
      polls () {
        return this.$store.state.polls
      }
    },

    created () {
      this.$store.dispatch('getPolls')
    }
  }
</script>
