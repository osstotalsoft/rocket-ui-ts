import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import forbidden from '../../assets/img/forbidden.png'
import Typography from 'components/dataDisplay/Typography'
import Button from 'components/buttons/Button'
import { ForbiddenProps } from './types'

/**
 * Used when users don't have access to certain page due to insufficient rights.
 */

const Forbidden: React.FC<ForbiddenProps> = ({
  forbiddenText = 'Not allowed to see this page!',
  forbiddenButtonText = 'Go to main page'
}) => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <Grid item>
        <img src={forbidden} alt="ForbiddenImage" />
      </Grid>
      <Grid item>
        <Typography variant={'h5'} emphasis="bold">
          {forbiddenText}
        </Typography>
      </Grid>
      <Grid item>
        <Button size={'small'} color={'primary'} href={'/'}>
          {forbiddenButtonText}
        </Button>
      </Grid>
    </Grid>
  )
}

Forbidden.propTypes = {
  /**
   * @default 'Not allowed to see this page!'
   * Text to be displayed
   */
  forbiddenText: PropTypes.string,
  /**
   * @default 'Go to main page'
   * Text to be displayed on button
   */
  forbiddenButtonText: PropTypes.string
}

export default Forbidden
