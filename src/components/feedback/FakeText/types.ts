// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.
import { SkeletonProps } from '@mui/material/Skeleton'

export interface FakeTextProps extends Omit<SkeletonProps, 'animation'> {
  /**
   * @default 'wave'
   * The animation. If false, the animation effect is disabled
   */
  animation?: 'pulse' | 'wave' | false
  /**
   * @default 1
   * The number of fake line texts that will be rendered
   */
  lines?: number
  /**
   * @default false
   * If set to true, the fake text will render on a Paper component
   */
  onPaper?: boolean
}
