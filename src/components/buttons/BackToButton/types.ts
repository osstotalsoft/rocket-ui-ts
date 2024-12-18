// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

import { NavigateOptions } from 'react-router'
import { IconButtonProps } from '../IconButton/types'

export interface BackToButtonProps extends Omit<IconButtonProps, 'type'> {
  /**
   * Path where browser will be directed to when the button is clicked.
   */
  path: string | number
  /**
   * Navigation options.
   * flushSync?: boolean;
   * preventScrollReset?: boolean;
   * relative?: RelativeRoutingType;
   * replace?: boolean;
   * state?: any;
   * viewTransition?: boolean;
   */
  options?: NavigateOptions
}
