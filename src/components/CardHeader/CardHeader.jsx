import React from 'react'
import PropTypes from 'prop-types'

import { Stargazers } from '../../components'

import styles from './CardHeader.module.scss'

const CardHeader = ({ name, license, url, count, avatarUrl, userUrl }) => {
  return (
    <div className={`row ${styles.cardHeader}`}>
      <div className={`row ${styles.headerInfos}`}>
        {!avatarUrl ? null : (
          <a href={userUrl} target='_blank' rel='noopener noreferrer'>
            <div
              className={`m-t-xsmall m-r-xnormal ${styles.avatar}`}
              style={{ backgroundImage: `url(${avatarUrl})` }}
            />
          </a>
        )}
        <a
          className={`column ${styles.title}`}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div>{name}</div>
          {license && license.name && (
            <div className={`m-t-xsmall ${styles.license}`}>{license.name}</div>
          )}
        </a>
      </div>
      <Stargazers count={count} />
    </div>
  )
}

CardHeader.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  license: PropTypes.object,
  userUrl: PropTypes.string,
  avatarUrl: PropTypes.string,
}

export default CardHeader
