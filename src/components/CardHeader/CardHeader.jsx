import React from 'react'
import PropTypes from 'prop-types'

import { Stargazers } from '../../components'

import styles from './CardHeader.module.scss'

const CardHeader = ({ name, license, url, count, avatarUrl, userUrl, updatedDate }) => {
  return (
    <div className={`row ${styles.cardHeader}`}>
      <div className={`row m-r-xsmall ${styles.headerInfos}`}>
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
          <div className={`row m-t-xsmall ${styles.subHeader}`}>
            {updatedDate && (
              <div className={`row ${styles.license}`}>
                <div className='m-r-xsmall'>Atualizado:</div>
                {new Date(updatedDate).toLocaleString('pt-BR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            )}
            {license && license.name && (
              <div className={`row ${styles.license}`}>
                <div className='m-lr-xsmall '>-</div>
                {license.name}
              </div>
            )}
          </div>
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
  updatedDate: PropTypes.string,
}

export default CardHeader
