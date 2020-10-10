import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import styles from './FilterOrder.module.scss'

const FilterOrder = ({ onOrder, orders, order }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [selected, setSelected] = React.useState(order)

  const handleClick = event => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const handleClose = event => {
    event.stopPropagation()
    setAnchorEl(null)
  }

  const handleSelect = (event, option) => {
    event.stopPropagation()
    setAnchorEl(null)
    if (onOrder && option !== selected) {
      setSelected(option)
      onOrder(option)
    }
  }

  return (
    <div>
      <Button
        className={styles.buttonOrder}
        variant='outlined'
        aria-controls='order-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        Ordenar:{' '}
        <div className={`m-l-xsmall ${styles.selectedLabel}`}>
          {!selected ? '' : (
            <div className={`row ${styles.option}`}>
              {selected.order === 'desc' ? (
                <div className={`m-r-xsmall ${styles.iconPlus}`}>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              ) : (
                <div className={`m-r-xsmall ${styles.iconMinus}`}>
                  <FontAwesomeIcon icon={faMinus} />
                </div>
              )}
              <div>{selected.label}</div>
            </div>
          )}
        </div>
      </Button>
      <Menu
        id='order-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {orders.map((order, index) => (
          <MenuItem key={index} onClick={ev => handleSelect(ev, order)}>
            <div className={`row ${styles.option}`}>
              {order.order === 'desc' ? (
                <div className={`m-r-small ${styles.iconPlus}`}>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              ) : (
                <div className={`m-r-small ${styles.iconMinus}`}>
                  <FontAwesomeIcon icon={faMinus} />
                </div>
              )}
              <div>{order.label}</div>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

FilterOrder.propTypes = {
  orders: PropTypes.array.isRequired,
  onOrder: PropTypes.func.isRequired,
  order: PropTypes.object,
}

export default FilterOrder
