import styled from '@emotion/styled'
import { Typography } from 'components'

export const Title = styled(Typography)`
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: -0.056rem;

  @media (min-width: 900px) {
    font-size: 3rem;
    margin-top: 150px;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1025px) {
    font-size: 5rem;
  }
`
