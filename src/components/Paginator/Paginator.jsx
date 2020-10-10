import React from 'react'
import PropTypes from 'prop-types'
import { isMobile } from 'react-device-detect'

import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const Paginator = ({ pageCount, currentPage, onChange }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }))

  const classes = useStyles()

  const [page, setPage] = React.useState(currentPage)

  const handleChange = (event, value) => {
    setPage(value)

    if(onChange) {
      onChange(value)
    }
  }

  const size = isMobile ? 'small' : 'large'

  return (
    <div className={classes.root}>
      <Pagination count={pageCount} page={page} onChange={handleChange} size={size} />
    </div>
  )
}

Paginator.propTypes = {
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func,
}

export default Paginator
