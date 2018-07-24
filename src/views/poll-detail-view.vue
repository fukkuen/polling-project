<template>
  <div>
    <poll-card
      v-if="pollItem"
      :single="true"
      :poll-data="pollItem"/>
  </div>
</template>

<script>
export default {
  name: 'poll-detail-view',

  computed: {
    $pollId () {
      return this.$route.params.id
    },
    pollItem () {
      const pollList = this.$store.state.polls
      if (!pollList) return
      return pollList.find(item => item.id === Number(this.$pollId))
    }
  },

  created () {
    if (!this.pollItem) this.$store.dispatch('getPolls')
  }
}
</script>
