<template>
  <Doughnut
    id="my-donut"
    :data="{
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#7161ef', '#957fef', '#b79ced', '#dec0f1'],
        data: [40, 20, 30, 10]
      }
    ]
  }"
    :options="{}"
  />
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)
</script>
