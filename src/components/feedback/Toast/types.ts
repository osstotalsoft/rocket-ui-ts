// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { always, cond, equals, T } from 'ramda'
import { Bounce, Flip, ToastOptions as ToastOptionsBase, ToastContainerProps as ToastContainerPropsBase, Slide, Zoom } from 'react-toastify'

export type FontSize = 'small' | 'medium' | 'large'

export interface ToastContainerProps extends Omit<ToastContainerPropsBase, 'transition' | 'textSize'> {
  /**
   * The appearance effect.
   * @default Slide
   */
  transitionType?: 'Slide' | 'Bounce' | 'Zoom' | 'Flip',
  /**
  * The size of the toast content text.
  * @default 'small'
 */
  textSize?: FontSize
}

export type ToastOptions = Omit<ToastOptionsBase, 'transition'> & {
  transitionType?: 'Slide' | 'Bounce' | 'Zoom' | 'Flip',
  actions?: React.ReactNode
}

export const getTransitionType = cond([
  [equals('Slide'), always(Slide)],
  [equals('Bounce'), always(Bounce)],
  [equals('Flip'), always(Flip)],
  [equals('Zoom'), always(Zoom)],
  [T, always(Slide)]
])