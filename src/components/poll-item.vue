<template>
  <div class="poll-item">
    <div class="poll-item__l">
      <donut-chart small :poll-data="pollData"></donut-chart>
    </div>
    <div class="poll-item__r">
      <div class="el-headline">{{pollData.publishedDate | date}}</div>
      <div class="poll-item__title">{{pollData.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'poll-item',
    props: {
      pollData: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="stylus">
  @import '../lib/main.styl'
  .poll-item
    display flex
    justify-content center
    padding 10px

    &__l
      width 80px

    &__r
      flex 1
      margin-left 10px

    &__title
      font-family $headerFont
      font-size 14px
      font-weight bold
</style>
