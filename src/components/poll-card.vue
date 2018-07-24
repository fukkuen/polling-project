<template>
  <div class="poll-card" :class="{'poll-card--single': single}">
    <div class="poll-card__t single-show-lg">
      <div class="poll-card__title">{{pollData.title}}</div>
      <div class="poll-card__date"><span class="allcap">Published:</span> {{pollData.publishedDate | dateTime}}</div>
    </div>
    <div class="poll-card__main">
      <div class="poll-card__headline single-hide">Today's Poll</div>
      <div class="poll-card__row">
        <div class="poll-card__l">
          <div class="poll-card__title single-hide-lg">
            {{pollData.title}}
            <span class="el-headline">{{pollData.publishedDate | date}}</span>
          </div>
          <vi-checkbox v-for="opt in options" :key="opt.id" v-model="selected" :value="opt.id" :label="opt.label"/>
        </div>
        <div class="poll-card__r">
          <div id="chart1"></div>
        </div>
      </div>
      <div class="poll-card__count">Total number of votes recorded: {{pollData.counts}}</div>
    </div>
  </div>
</template>

<script>
import {GoogleCharts} from 'google-charts';

export default {
  name: 'poll-card',
  props: {
    pollData: {
      type: Object,
      required: true
    },
    // set single to true in detail page for different markup
    single: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      selected: ''
    }
  },
  computed: {
    options () {
      return this.pollData.answer.options
    },
    isMultiple () {
      return this.pollData.answer.type === 'Multiple'
    }
  },
  methods: {
    drawChart () {
      // TODO use real data ...optionData
      const optionData = this.options.map(opt => {
        return [opt.label, opt.counts]
      })
      const data = google.visualization.arrayToDataTable([
        ['Answer', 'Counts'],
        ['Yes', 1],
        ['No', 2]
      ])

      const options = {
        colors: ['#E1682F', '#133460'],
        height: 180,
        width: 180,
        pieHole: 0.4,
        legend: 'none',
        fontSize: 20,
        chartArea: {
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#fdc'
        }
      }

      const chart = new google.visualization.PieChart(document.getElementById('chart1'))
      chart.draw(data, options)
    }
  },
  mounted () {
    GoogleCharts.load(this.drawChart)
  }
}
</script>

<style lang="stylus">
  @import '../lib/main.styl'
  .poll-card
    display block

    &__main
      background #d6d6d6
      padding 32px 32px 16px 32px
      padding-right 0

      .poll-card--single &
        background #AAC8E0

    &__headline
      color $blue-text
      font-size 20px
      font-weight bold
      margin-bottom 8px

    &__title
      font-size 18px
      margin-bottom 16px
      font-family $headerFont
      line-height 1.2
      font-weight bold

      +screen-up(601px)
        .poll-card--single &
          font-size 28px
          margin-bottom 10px
          padding-bottom 10px
          border-bottom 1px solid #e1e1e1

    &__date
      font-size 12px
      color $light-grey
      padding-bottom 10px
      text-align right

    &__row
      display flex

      +screen(600px)
        display block

    &__t
      display none

      .poll-card--single &
        display block

    &__l
      flex 1

    &__r
      width 200px
      margin-left 20px
      margin-top -16px

      +screen(600px)
        margin-left 0
        margin-top 24px
        display flex
        justify-content center
        width 100%

    &__count
      font-size 12px

      +screen(600px)
        margin-top 16px
        text-align center

    rect
      display none

  .single-show
    display none

    .poll-card--single &
      display block

  .single-hide
    display block

    .poll-card--single &
      display none

  .single-show-lg
    display none !important

    +screen-up(601px)
      .poll-card--single &
        display block !important

  +screen-up(601px)
    .single-hide-lg
      display block

      .poll-card--single &
        display none
</style>
