<template>
  <div class="donut-chart">
    <div v-if="insufficientData" class="donut-chart__placeholder">
      insufficient data
    </div>
    <div ref="chart1"></div>
  </div>
</template>

<script>
import {GoogleCharts} from 'google-charts';
export default {
  name: 'chart',
  props: {
    pollData: {
      type: Object,
      required: true
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      colors: ['#E1682F', '#133460', 'red', 'blue', 'green', 'purple', 'orange', 'black']
    }
  },
  computed: {
    options () {
      return this.pollData.answer.options
    },
    insufficientData () {
      // TODO: product question - how much to be sufficient
      return this.pollData.counts < 1
    }
  },
  methods: {
    drawChart () {
      const optionData = this.options.map(opt => {
        return [opt.label, opt.counts]
      })
      const data = google.visualization.arrayToDataTable([
        ['Answer', 'Counts'],
        ...optionData
      ])
      const options = {
        colors: this.colors,
        height: this.small ? 80 : 180,
        width: this.small ? 80 : 180,
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

      const chart = new google.visualization.PieChart(this.$refs.chart1)
      chart.draw(data, options)
    }
  },
  mounted () {
    if (this.insufficientData) return
    GoogleCharts.load(this.drawChart)
  },
  watch: {
    'pollData.counts': function () {
      this.drawChart()
    }
  }
}
</script>

<style lang="stylus">
  .donut-chart
    &__placeholder
      width 80px
      height 80px
      border-radius 500em
      background #f9f9f9
      font-size 12px
      display flex
      align-items center
      justify-content center
      text-align center
</style>
