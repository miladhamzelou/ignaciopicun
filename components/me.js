import React from 'react'
import { css } from 'glamor'

export default () =>
  <div className={me}>
    <h1>Ignacio Picun</h1>
    <h2>Creative Web Developer</h2>
  </div>

const me = css({
  padding: '15px',
  textAlign: 'center',
  '& h1': {
    fontSize: '96px',
    margin: '26px 0'
  },
  '& h2': {
    fontSize: '32px',
    fontWeight: 'lighter',
    margin: '34px 0',
    color: '#818181'
  },
  '@media(max-width: 768px)': {
    margin: '30px 0 30px',
    '& h1': {
      fontSize: '72px',
      margin: '26px 0'
    }
  },
  '@media(max-width: 480px)': {
    margin: '0',
    '& h1': {
      fontSize: '42px'
    },
    '& h2': {
      fontSize: '22px'
    }
  }
})
