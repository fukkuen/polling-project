<template>
  <div>
    <div v-if="!polls">loading...</div>
    <template v-else>
      <poll-card v-if="isTodayPoll" :poll-data="polls[0]" style="margin-bottom: 24px"></poll-card>
      <div class="vi-row" v-if="computedPolls.length > 0">
        <div class="vi-col-6 vi-col-12-xs" v-for="p in computedPolls" :key="p.id">
          <router-link :to="{name: 'poll-detail', params: {id: p.id}}">
            <poll-item :poll-data="p"></poll-item>
          </router-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'poll-list-view',

  computed: {
    polls () {
      return this.$store.state.polls
    },
    isTodayPoll () {
      // TODO double check
      return true
      // const firstPoll = this.polls && this.polls[0]
      // if (!firstPoll) return
      // const today = moment()
      // const firstPollDay = moment(firstPoll.publishedDate)
      // return firstPollDay.isSame(today, 'd')
    },
    computedPolls () {
      if (this.isTodayPoll) return this.polls.slice(1)
      else return this.polls
    }
  },

  created () {
    this.$store.dispatch('getPolls')
  }
}
</script>
