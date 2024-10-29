// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { ToastContainerProps as ReactToastifyProps } from 'react-toastify'

export interface ToastContainerProps extends Omit<ReactToastifyProps, 'transition'> {
  /**
   * The appearance effect.
   * @default Slide
   */
  transitionType?: 'Slide' | 'Bounce' | 'Zoom' | 'Flip'
}
