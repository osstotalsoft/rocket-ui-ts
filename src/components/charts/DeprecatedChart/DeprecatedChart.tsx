import React from 'react'
import PropTypes from 'prop-types'
import { Chart as BaseChart } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  DoughnutController,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import { DeprecatedChartProps } from './types'
import { Card, CardColor } from '../../surfaces/Card'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  DoughnutController,
  Tooltip,
  Legend,
  ArcElement
)

/**
 * @deprecated: The `DeprecatedChart`  component is deprecated and will be removed in a future release.
 * We recommend using the Mui X Chart components instead: https://mui.com/x/react-charts/
 */

const DeprecatedChart: React.FC<DeprecatedChartProps> = ({
  title,
  subheader,
  Icon,
  iconColor,
  type = 'line',
  data,
  cardProps,
  ...chartProps
}) => {
  return (
    <Card title={title} subheader={subheader} icon={Icon} iconColor={iconColor as CardColor} {...cardProps}>
      <BaseChart type={type} data={data} {...chartProps} />
    </Card>
  )
}

DeprecatedChart.propTypes = {
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
  type: PropTypes.oneOf(['bar', 'bubble', 'doughnut', 'line', 'pie', 'polarArea', 'radar', 'scatter']),
  /**
   * Chart data.
   */
  data: PropTypes.any.isRequired,
  /**
   * Props for the card containing the chart.
   */
  cardProps: PropTypes.object
}

export default DeprecatedChart
