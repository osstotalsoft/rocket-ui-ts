import React from 'react'
import PropTypes from 'prop-types'
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
} from './StatsChartStyles'

import Divider from '@mui/material/Divider'
import { StatsIconColor, StatsChartProps } from './types'
import Chart from './Chart'

/**
 * The StatsChart component provides a customizable and rich card component that combines
 * multiple elements to display different chart types with their corresponding statistical information
 */

const StatsChart: React.FC<StatsChartProps> = ({
  chartColor = 'info',
  iconColor = 'grey',
  title,
  text,
  statText,
  StatIcon,
  statAction,
  chart
}) => {
  return (
    <StyledCard disablePadding>
      <StyledCardHeader color={chartColor} subheader={<Chart {...chart} />} />
      <CardContent>
        <CardTitle variant="subtitle1">{title}</CardTitle>
        {text && <CardCategory variant="subtitle2">{text}</CardCategory>}
      </CardContent>
      {StatIcon || statText ? (
        <>
          <Divider />
          <CardActions>
            <CardStatContainer>
              {StatIcon && <StatIcon style={statIconStyle} color={iconColor as StatsIconColor} />}
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
   * @default 'info'
   * Chart color.
   */
  chartColor: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'dark']),
  /**
   * @default 'grey'
   * Chart icon color.
   */
  iconColor: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error']),
  /**
   * Chart title.
   */
  title: PropTypes.string,
  /**
   * The text content of chart.
   */
  text: PropTypes.string,
  /**
   * Chart status text.
   */
  statText: PropTypes.string,
  /**
   * Chart icon.
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  StatIcon: PropTypes.object,
  /**
   *  Actions to be displayed in the right corner of the card.
   */
  statAction: PropTypes.node,
  /**
   * Chart properties.
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  chart: PropTypes.object
}

export default StatsChart
