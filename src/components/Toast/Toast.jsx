import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

import styles from './Toast.module.scss'

const Toast = ({ severity, message, onClose }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }))

  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
    if (onClose) {
      onClose()
    }
  }

  let severityClass

  switch (severity) {
    case 'error':
      severityClass = styles.error
      break

    case 'success':
      severityClass = styles.success
      break

    case 'warning':
      severityClass = styles.warning
      break

    case 'info':
      severityClass = styles.info
      break

    default:
      severityClass = styles.default;
      break
  }

  return (
    <div className={classes.root}>
      <Snackbar className={`${styles.toast} ${severityClass}`} open={open} autoHideDuration={8000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

Toast.propTypes = {
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Toast
