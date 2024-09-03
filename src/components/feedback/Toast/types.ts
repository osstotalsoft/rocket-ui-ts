// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { ToastContainerProps as ReactToastifyProps } from 'react-toastify'

export interface ToastContainerProps extends Omit<ReactToastifyProps, 'transition'> {
  /**
   * The appearance effect.
   * @default Slide
   */
  transitionType?: 'Slide' | 'Bounce' | 'Zoom' | 'Flip'
  /**
   * Set the delay in ms to close the toast automatically.
   * Use `false` to prevent the toast from closing.
   * `Default: false`
   */
  autoClose?: number | false
}
