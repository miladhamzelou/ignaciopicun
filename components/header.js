import React from 'react'
import css from 'next/css'

import Avatar from './avatar'
import Nav from './nav'

export default () =>
  <header className={header}>
    <Avatar />
    <Nav collapse />
  </header>

const header = css({
  display: 'flex',
  padding: '40px 15px',
  maxWidth: '920px',
  margin: '0 auto',
  alignItems: 'center',
  justifyContent: 'space-between'
})
