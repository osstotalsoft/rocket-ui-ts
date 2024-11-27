// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { TypographyProps } from 'components/dataDisplay/Typography'
import { always, cond, equals, T } from 'ramda'
import { Bounce, Flip, ToastContainerProps as ReactToastifyProps, Slide, Zoom } from 'react-toastify'

export interface ToastContainerProps extends Omit<ReactToastifyProps, 'transition'> {
  /**
   * The appearance effect.
   * @default Slide
   */
  transitionType?: 'Slide' | 'Bounce' | 'Zoom' | 'Flip'
  /**
   * The actions to be displayed in the toast.
   */
  actions?: React.ReactNode
  /**
   * The typography text props of the message toast.
   */
  textProps?: TypographyProps
}

export const getTransitionType = cond([
  [equals('Slide'), always(Slide)],
  [equals('Bounce'), always(Bounce)],
  [equals('Flip'), always(Flip)],
  [equals('Zoom'), always(Zoom)],
  [T, always(Slide)]
])