<template>
  <div>
    list view
    <router-link :to="{name: 'poll-detail', params: {id: 1}}">go to detail</router-link>
    {{polls}}
    <vi-checkbox name="checkbox-checked" label="name" :input-value="true"/>
    <vi-button>sdf</vi-button>
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
