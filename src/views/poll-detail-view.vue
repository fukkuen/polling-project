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
  name: 'poll-list-view',

  computed: {
    $pollId () {
      return this.$route.params.id
    },
    pollItem () {
      const pollList = this.$store.state.polls
      return pollList.find(item => item.id === this.$pollId)
    }
  }
}
</script>
