// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

export const statsChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  barPercentage: 0.2,
  tooltip: true,
  plugins: {
    title: {
      display: false,
      text: ''
    },
    legend: {
      display: false
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
        color: 'white',
        borderDash: [1, 5],
        zeroLineColor: 'rgb(255,255,255)',
        drawBorder: false,
        zeroLineWidth: 0
      },
      scaleLabel: {
        display: false,
        labelString: '',
        fontColor: 'black'
      },
      ticks: {
        color: 'white',
        autoSkip: false
      }
    },
    y: {
      grid: {
        display: true,
        color: 'white',
        borderDash: [1, 5],
        zeroLineColor: 'rgb(255,255,255)',
        drawBorder: false,
        zeroLineBorderDash: [1, 5]
      },
      scaleLabel: {
        display: false,
        labelString: '',
        fontColor: 'black'
      },
      ticks: {
        color: 'white'
      }
    }
  }
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
export const statsChartData = {
  labels,
  datasets: [
    {
      data: labels.map(() => Math.floor(Math.random() * 101)),
      label: 'Dataset 1',
      backgroundColor: 'white',
      borderColor: 'white'
    },
    {
      data: labels.map(() => Math.floor(Math.random() * 101)),
      label: 'Dataset 2',
      backgroundColor: 'white',
      borderColor: 'white'
    }
  ]
}
