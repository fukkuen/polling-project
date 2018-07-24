<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  @import './lib/main.styl'
  #app
    padding 40px
    max-width 700px
    margin 0 auto

    +screen(600px)
      padding 0
</style>
