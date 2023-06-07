import {
  DialogProps as MuiDialogProps,
  DialogTitleProps as MuiDialogTitleProps,
  DialogContentProps as MuiDialogContentProps,
  DialogContentTextProps as MuiDialogContentTextProps,
  DialogActionsProps as MuiDialogActionsProps
} from '@mui/material'
import { ButtonProps, IconButtonProps } from '../../index'

export type DialogCloseReason = 'backdropClick' | 'escapeKeyDown' | 'closeActionClick'

export interface DefaultActionsProps extends ButtonProps {
  /**
   * @default 'Yes'
   * Text content of the first (left) action.
   */
  textDialogYes?: string
  /**
   * @default 'No'
   * Text content of the second (right) action.
   */
  textDialogNo?: string
}

export interface DialogProps extends Omit<MuiDialogProps, 'onClose' | 'title' | 'content' | 'fullWidth'> {
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {React.MouseEvent} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"` or 'closeActionClick'.
   */
  onClose?: (event: React.MouseEvent, reason: DialogCloseReason) => void
  /**
   * Props sent to the close button.
   */
  closeButtonProps?: IconButtonProps
  /**
   * Title of the dialog.
   */
  title?: React.ReactNode
  /**
   * Props sent to the DialogTitle component.
   */
  titleProps?: MuiDialogTitleProps
  /**
   * Props sent to the DialogContent component.
   */
  contentProps?: MuiDialogContentProps
  /**
   * Content of the dialog.
   */
  content?: React.ReactNode
  /**
   * Text content of the dialog. If received, it will be wrapped by the MUI DialogContentText component.
   */
  textContent?: React.ReactNode
  /**
   * Props sent to the DialogContentText component.
   */
  textContentProps?: MuiDialogContentTextProps
  /**
   * The actions provided below the dialog.
   */
  actions?: React.ReactNode
  /**
   * Props sent to the DialogActions component.
   */
  actionsProps?: MuiDialogActionsProps
  /**
   * @default false
   * If `true`, it will render `Yes` and `No` button actions by default.
   *
   * The following properties would be required: @onYes and @onClose properties.
   *
   * The two default buttons can be configured using @defaultActionsProps property.
   */
  defaultActions?: boolean
  /**
   * Specific button configurations that will be applied to the default `Yes`/`No` buttons.
   */
  defaultActionsProps?: DefaultActionsProps
  /**
   * Callback fired when a "click" event is detected.
   */
  onYes?: () => void
  /**
   * @default false
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick?: boolean
  /**
   * @default false
   * If `true`, the backdrop (the outer background) will be transparent.
   */
  transparentBackdrop?: boolean
  /**
   * @default false
   * If `true`, the close button is shown.
   */
  showX?: boolean
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default true
   */
  fullWidth?: boolean
  /**
   * @default false
   * Display dividers at the top and bottom of DialogContent.
   */
  dividers?: boolean
}
