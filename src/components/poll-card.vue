<template>
  <div class="poll-card">
    <div class="poll-card__t"></div>
    <div class="poll-card__headline">Today's Poll</div>
    <div class="poll-card__row">
      <div class="poll-card__l">
        <div class="poll-card__title">
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
</template>

<script>
import {GoogleCharts} from 'google-charts';

export default {
  name: 'poll-card',
  props: {
    pollData: {
      type: Object,
      required: true
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
    background #d6d6d6
    padding 16px
    padding-right 0

    &__headline
      color $blue-text
      font-size 20px
      font-weight bold
      margin-bottom 8px

    &__title
      font-size 18px
      margin-bottom 16px
      font-family $headerFont

    &__row
      display flex

    &__l
      flex 1

    &__r
      width 200px
      margin-left 20px
      margin-top -16px

    &__count
      font-size 12px

    rect
      display none

</style>
