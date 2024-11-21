import React from 'react'
import PropTypes, { number } from 'prop-types'
import {
  StyledCard,
  CardActions,
  CardCategory,
  CardContent,
  StyledCardHeader,
  CardStatContainer,
  CardTitle,
  statIconStyle,
  StatAction
} from './DeprecatedStatsChartStyles'
import { Chart } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  Tooltip
} from 'chart.js'
import Divider from '@mui/material/Divider'
import { DeprecatedStatsIconColor, DeprecatedStatsChartProps } from './types'

ChartJS.register(CategoryScale, LinearScale, LineController, PointElement, LineElement, BarElement, BarController, Tooltip)

/**
 * @deprecated: The `DeprecatedStatsChart` component is deprecated and it would be removed in a future release.
 * Use `StatsChart` instead.
 */

const StatsChart: React.FC<DeprecatedStatsChartProps> = ({
  chartColor = 'info',
  iconColor = 'grey',
  title,
  text,
  statText,
  StatIcon,
  type = 'line',
  data,
  statAction,
  ...rest
}) => {
  return (
    <StyledCard disablePadding>
      <StyledCardHeader color={chartColor} subheader={<Chart type={type} data={data} {...rest} />} />
      <CardContent>
        <CardTitle variant="subtitle1">{title}</CardTitle>
        {text && <CardCategory variant="subtitle2">{text}</CardCategory>}
      </CardContent>
      {StatIcon || statText ? (
        <>
          <Divider />
          <CardActions>
            <CardStatContainer>
              {StatIcon && <StatIcon style={statIconStyle} color={iconColor as DeprecatedStatsIconColor} />}
              {statText}
            </CardStatContainer>
            <StatAction>{statAction}</StatAction>
          </CardActions>
        </>
      ) : null}
    </StyledCard>
  )
}

StatsChart.propTypes = {
  /**
   * @default 'line'
   * Chart type.
   */
  type: PropTypes.oneOf(['line', 'bar']),
  /**
   * Chart title.
   */
  title: PropTypes.string,
  /**
   * The text content of chart.
   */
  text: PropTypes.string,
  /**
   * Chart icon.
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  StatIcon: PropTypes.object,
  /**
   * @default 'grey'
   * Chart icon color.
   */
  iconColor: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error']),
  /**
   * @default 'info'
   * Chart color.
   */
  chartColor: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'dark']),
  /**
   * Chart status text.
   */
  statText: PropTypes.node,
  /**
   * Chart data.
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.arrayOf(number).isRequired,
        label: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        borderColor: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }).isRequired,
  /**
   *  Actions to be displayed in the right corner of the card.
   */
  statAction: PropTypes.node
}

export default StatsChart
