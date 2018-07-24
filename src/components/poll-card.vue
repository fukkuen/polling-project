<template>
  <div class="poll-card">
    <div class="poll-card__title">{{pollData.title}}</div>
    <vi-checkbox v-for="opt in options" :key="opt.id" v-model="selected" :value="opt.id" :label="opt.label"/>
    <div class="poll-card__count">Total number of votes recorded: {{pollData.counts}}</div>
    <div id="chart1"></div>
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
        height: 500,
        width: 500,
        pieHole: 0.4,
        legend: 'none',
        fontSize: 20
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
