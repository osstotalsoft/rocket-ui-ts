import MuiAccordionSummary from '@mui/material/AccordionSummary'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'
import { AccordionSummaryProps } from './types'
import { Theme } from '@mui/material'

type StyledProps = { theme: Theme } & AccordionSummaryProps

export const AccordionSummary = styled(MuiAccordionSummary, {
  shouldForwardProp: prop => !includes(prop, ['variant'])
})(({ theme, variant }: StyledProps) => ({
  ...(variant === 'filled' && { backgroundColor: theme.palette.grey[200] })
}))
