<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script setup>
import { reactive, computed } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const data = reactive({
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'

  ],
  datasets: [{
    label: '# of Votes',
    data: [100, 200, 50, 80, 63, 70, 100, 200, 50, 80, 63, 70],
    backgroundColor: [
      '#ffd6ff',
      '#e7c6ff',
      '#c8b6ff',
      '#b8c0ff',
      '#bbd0ff',
      '#ff99c8',
      '#fcf6bd',
      '#d0f4de',
      '#a9def9',
      '#e4c1f9',
      '#90e0ef',
      '#ff595e',

    ],
    borderWidth: 1
  }]
})

const options = reactive({
  chartOptions: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})

const chartData = computed(() => data)
const chartOptions = computed(() => options)
</script>
