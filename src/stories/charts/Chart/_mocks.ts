// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { LayoutPosition } from 'chart.js'

export const chartOptions = {
  maintainAspectRatio: false,
  barPercentage: 0.2,
  plugins: {
    title: {
      display: false,
      text: ''
    },
    legend: {
      position: 'bottom' as LayoutPosition
    }
  },
  layout: {
    padding: {
      left: 0,
      right: 20,
      top: 20,
      bottom: 0
    }
  },
  scales: {
    x: {
      offset: false,
      grid: {
        display: true,
        borderDash: [1, 5],
        zeroLineColor: 'rgb(255,255,255)',
        drawBorder: false,
        zeroLineWidth: 0
      },
      scaleLabel: {
        display: false,
        labelString: ''
      },
      ticks: {
        autoSkip: false
      }
    },
    y: {
      grid: {
        display: true,
        borderDash: [1, 5],
        zeroLineColor: 'rgb(255,255,255)',
        drawBorder: false,
        zeroLineBorderDash: [1, 5]
      },
      scaleLabel: {
        display: false,
        labelString: ''
      }
    }
  }
}

const barLineLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const lineChartData = {
  labels: barLineLabels,
  datasets: [
    {
      data: barLineLabels.map(() => Math.floor(Math.random() * 101)),
      label: 'Line',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      data: barLineLabels.map(() => Math.floor(Math.random() * 101)),
      label: 'Line2',
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
}

export const barChartData = {
  labels: barLineLabels,
  datasets: [
    {
      data: barLineLabels.map(() => Math.floor(Math.random() * 101)),
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      data: barLineLabels.map(() => Math.floor(Math.random() * 101)),
      label: 'Dataset 2',
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
}

const doughnutLabels = ['Dataset1', 'Dataset 2']

export const doughnutChartData = {
  labels: doughnutLabels,
  datasets: [
    {
      data: doughnutLabels.map(() => Math.floor(Math.random() * 101)),
      borderColor: ['rgb(255, 99, 132)', 'rgb(53, 162, 235)'],
      backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)']
    }
  ]
}
