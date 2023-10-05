import React, { MouseEventHandler, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import MuiDialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { SystemStyleObject } from '@mui/system'
import CloseIcon from '@mui/icons-material/Close'
import { TransparentBackdrop, DialogContent, DialogTitle, justifyRight } from './DialogStyles'
import { Button, IconButton } from '../../index'
import { DialogCloseReason, DialogProps } from './types'

/**
 * Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 *
 * A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.
 *
 * Dialogs are purposefully interruptive, so they should be used sparingly.
 */
const Dialog: React.FC<DialogProps> = ({
  id,
  title,
  titleProps,
  content,
  contentProps,
  textContent,
  textContentProps,
  actions,
  actionsProps,
  defaultActions,
  defaultActionsProps = { textDialogYes: 'Yes', textDialogNo: 'No' },
  onYes,
  onClose,
  closeButtonProps,
  disableBackdropClick = false,
  fullScreen,
  showX = true,
  transparentBackdrop,
  dividers = false,
  fullWidth = true,
  open = false,
  ...rest
}) => {
  const dialogTitleId = `${id}-dialog-display-title`

  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClose = useCallback(
    (event: React.MouseEvent, reason: DialogCloseReason) => {
      if (disableBackdropClick && reason === 'backdropClick') return

      onClose(event, reason ?? 'closeActionClick')
    },
    [disableBackdropClick, onClose]
  )

  const { textDialogYes, textDialogNo, ...buttonProps } = defaultActionsProps
  const defaultActionsComp = (
    <>
      <Button right {...buttonProps} onClick={onYes}>
        {textDialogYes}
      </Button>
      <Button right {...buttonProps} onClick={handleClose as MouseEventHandler}>
        {textDialogNo}
      </Button>
    </>
  )
  const closeButtonSx = useMemo(
    () => ({ ...justifyRight, ...closeButtonProps?.sx } as SystemStyleObject),
    [closeButtonProps?.sx]
  )

  return (
    <MuiDialog
      onClose={handleClose}
      aria-labelledby={dialogTitleId}
      fullScreen={R.isNil(fullScreen) ? smallScreen : fullScreen}
      BackdropComponent={transparentBackdrop && TransparentBackdrop}
      fullWidth={fullWidth}
      open={open}
      {...rest}
    >
      <DialogTitle id={dialogTitleId} {...titleProps}>
        {title}
        {showX && (
          <IconButton
            color="default"
            variant="text"
            size="small"
            aria-label="Close"
            onClick={handleClose as MouseEventHandler}
            {...closeButtonProps}
            sx={closeButtonSx}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent dividers={dividers} {...contentProps}>
        {textContent && <DialogContentText {...textContentProps}>{textContent}</DialogContentText>}
        {content}
      </DialogContent>
      <DialogActions {...actionsProps}>{defaultActions ? defaultActionsComp : actions}</DialogActions>
    </MuiDialog>
  )
}

Dialog.propTypes = {
  /**
   * Identifier of the dialog.
   */
  id: PropTypes.string.isRequired,
  /**
   * @default false
   * If true, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: PropTypes.func,
  /**
   * Title of the dialog.
   */
  title: PropTypes.node,
  /**
   * Content of the dialog.
   */
  content: PropTypes.node,
  /**
   * Text content of the dialog. If received, it will be wrapped by the MUI DialogContentText component.
   */
  textContent: PropTypes.node,
  /**
   * The actions provided below the dialog.
   */
  actions: PropTypes.node,
  /**
   * @default false
   * If true, clicking the backdrop will not fire the onClose callback.
   */
  disableBackdropClick: PropTypes.bool,
  /**
   * Props sent to the DialogTitle component.
   */
  titleProps: PropTypes.object,
  /**
   * Props sent to the DialogContent component.
   */
  contentProps: PropTypes.object,
  /**
   * Props sent to the DialogContentText component.
   */
  textContentProps: PropTypes.object,
  /**
   * Props sent to the DialogActions component.
   */
  actionsProps: PropTypes.object,
  /**
   * @default false
   * If `true`, it will render `Yes` and `No` button actions by default.
   *
   * The following properties would be required: @onYes and @onClose properties.
   *
   * The two default buttons can be configured using @defaultActionsProps property.
   */
  defaultActions: PropTypes.bool,
  /**
   * Props sent to the default action buttons.
   */
  defaultActionsProps: PropTypes.object,
  /**
   * Callback fired when a "click" event is detected.
   */
  onYes: PropTypes.func,
  /**
   * Props sent to the close button.
   */
  closeButtonProps: PropTypes.object,
  /**
   * If true, the backdrop will be transparent.
   */
  transparentBackdrop: PropTypes.bool,
  /**
   * If true, the dialog is full-screen.
   */
  fullScreen: PropTypes.bool,
  /**
   * @default true
   * If true, the close button is shown.
   */
  showX: PropTypes.bool,
  /**
   * @default false
   * Display dividers at the top and bottom of DialogContent.
   */
  dividers: PropTypes.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default true
   */
  fullWidth: PropTypes.bool,
  /**
   * @default 'sm'
   * Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth.
   */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false])
}

export default Dialog
