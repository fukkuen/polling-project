import moment from 'moment'
import Vue from 'vue'

Vue.filter('date', (date) => {
  if (!date) { return '' }
  return moment.unix(date).format('DD MMM YYYY')
})

Vue.filter('dateTime', (date) => {
  if (!date) { return '' }
  return moment.unix(date, 'YYYY-MM-DD HH:mm:ss').format('dddd, DD MMMM, YYYY, hh:mm a')
})
