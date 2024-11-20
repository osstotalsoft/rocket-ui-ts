// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import LinePreview from './LinePreview'
import BarPreview from './BarPreview'
import PiePreview from './PiePreview'
import ScatterPreview from './ScatterPreview'
import GaugePreview from './GaugePreview'
import StatsChart from 'components/charts/StatsChart'

const meta: Meta<typeof StatsChart> = {
  title: 'Components/Charts/StatsChart',
  component: StatsChart
} satisfies Meta<typeof StatsChart>

export default meta
type Story = StoryObj<typeof StatsChart>

/**
 * The Line Stat Chart. For more information see https://mui.com/x/react-charts/lines/
 */
export const Line: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        <StatsChart
          StatIcon={AccessTime}
          statText={'Line chart infos'}
          title={'Line Chart'}
          chartColor="secondary"
          iconColor="info"
          text={'This is a line chart'}
          statAction={<Button size="tiny">Ok</Button>}
          chart={{
            type: 'line',
            xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
            series: [{ data: [2, 5.5, 2, 8.5, 1.5, 5] }],
            width: 450,
            height: 300
          }}
        />`,
        format: true
      }
    }
  },
  render: () => <LinePreview />
}

/**
 * The Bar Stat Chart. For more information see https://mui.com/x/react-charts/bars/
 */
export const Bar: Story = {
  parameters: {
    docs: {
      source: {
        code: `<StatsChart
          StatIcon={AccessTime}
          statText={'Bar chart infos'}
          title={'Bar Chart'}
          chartColor="info"
          iconColor="info"
          text={'This is a bar chart with custom colors'}
          statAction={'View'}
          chart={{
            type: 'bar',
            colors: ['#ff6f61', '#fdd835', '#004d6f'],
            xAxis: [{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }],
            series: [{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }],
            width: 450,
            height: 300
          }}
        />`,
        format: true
      }
    }
  },
  render: () => <BarPreview />
}

/**
 * The Pie Stat Chart. For more information see https://mui.com/x/react-charts/pie/
 */
export const Pie: Story = {
  parameters: {
    docs: {
      source: {
        code: `<StatsChart
          StatIcon={ErrorOutline}
          statText={'Pie chart infos'}
          title={'Pie Chart'}
          chartColor="info"
          iconColor="error"
          text={'This is a pie chart with error icon'}
          statAction={'View'}
          chart={{
            type: 'pie',
            series: [
              {
                data: [
                  { id: 0, value: 10, label: 'series A' },
                  { id: 1, value: 15, label: 'series B' },
                  { id: 2, value: 20, label: 'series C' }
                ]
              }
            ],
            width: 450,
            height: 300
          }}
        />`,
        format: true
      }
    }
  },
  render: () => <PiePreview />
}
/**
 * The Scatter Stat Chart. For more information see https://mui.com/x/react-charts/scatter/
 */
export const Scatter: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        const scatterData = [
        {
          id: 'data-0',
          x1: 329.39,
          x2: 391.29,
          y1: 443.28,
          y2: 153.9
        },
        {
          id: 'data-1',
          x1: 96.94,
          x2: 139.6,
          y1: 110.5,
          y2: 217.8
        },
        {
          id: 'data-2',
          x1: 336.35,
          x2: 282.34,
          y1: 175.23,
          y2: 286.32
        }
        //etc...  
      ]

        <StatsChart
          StatIcon={AccessTime}
          statText={'Scatter chart infos'}
          title={'Scatter Chart'}
          chartColor="warning"
          iconColor="info"
          text={'This is a scatter chart with warning background color'}
          statAction={'View'}
          chart={{
            type: 'scatter',
            series: [
              {
                label: 'Series A',
                data: scatterData.map(v => ({ x: v.x1, y: v.y1, id: v.id }))
              },
              {
                label: 'Series B',
                data: scatterData.map(v => ({ x: v.x1, y: v.y2, id: v.id }))
              }
            ],
            width: 450,
            height: 300
          }}
        />`,
        format: true
      }
    }
  },
  render: () => <ScatterPreview />
}

/**
 * The Gauge Stat Chart. For more information see https://mui.com/x/react-charts/gauge/
 */
export const Gauge: Story = {
  parameters: {
    docs: {
      source: {
        code: `<StatsChart
          StatIcon={AccessTime}
          statText={'Gauge chart infos'}
          title={'Gauge Chart'}
          chartColor="info"
          iconColor="info"
          text={'This is a gauge chart with startAngle and endAngle'}
          statAction={'View'}
          chart={{
            type: 'gauge',
            startAngle: -90,
            endAngle: 90,
            width: 450,
            height: 300,
            value: 70
          }}
        />`,
        format: true
      }
    }
  },
  render: () => <GaugePreview />
}
