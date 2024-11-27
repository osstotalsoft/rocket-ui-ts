// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { always, cond, equals, T } from 'ramda'
import { Bounce, Flip, ToastContainerProps as ReactToastifyProps, Slide, Zoom } from 'react-toastify'

export interface ToastContainerProps extends Omit<ReactToastifyProps, 'transition'> {
  /**
   * The appearance effect.
   * @default Slide
   */
  transitionType?: 'Slide' | 'Bounce' | 'Zoom' | 'Flip'
}

export const getTransitionType = cond([
  [equals('Slide'), always(Slide)],
  [equals('Bounce'), always(Bounce)],
  [equals('Flip'), always(Flip)],
  [equals('Zoom'), always(Zoom)],
  [T, always(Slide)]
])