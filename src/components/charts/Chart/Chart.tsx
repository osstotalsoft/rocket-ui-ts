import React from 'react'
import PropTypes from 'prop-types'
import { Chart as BaseChart } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js'
import { ChartProps } from './types'
import { Card, CardColor } from 'components/surfaces/Card'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend)

/**
 * The Chart component provides a set of frequently and customizable used chart types (`line` and `bar`).
 */

const Chart: React.FC<ChartProps> = ({ title, subheader, Icon, iconColor, type = 'line', data, ...chartProps }) => {
  return (
    <Card title={title} subheader={subheader} icon={Icon} iconColor={iconColor as CardColor}>
      <BaseChart type={type} data={data} {...chartProps} />
    </Card>
  )
}

Chart.propTypes = {
  /**
   * Chart title.
   */
  title: PropTypes.node,
  /**
   * Chart subtitle.
   */
  subheader: PropTypes.node,
  /**
   * Chart icon.
   */
  Icon: PropTypes.any,
  /**
   * Chart icon color.
   */
  iconColor: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'dark']),
  /**
   * @default 'line'
   * Chart type.
   */
  type: PropTypes.oneOf(['line', 'bar']),
  /**
   * Chart data.
   */
  data: PropTypes.any.isRequired
}

export default Chart
