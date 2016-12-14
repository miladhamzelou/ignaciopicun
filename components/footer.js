import React from 'react'
import css from 'next/css'

import Nav from './nav'

export default () =>
  <footer className={footer}>
    <Nav />
  </footer>

const footer = css({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '14px',
  margin: '60px 0',
  '& nav a': {
    color: '#aaaaaa'
  }
})
