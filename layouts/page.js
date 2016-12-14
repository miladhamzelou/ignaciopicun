import React, { PropTypes } from 'react'
import css from 'next/css'

import Head from '../components/head'

const Page = ({children}) =>
  <div className={page}>
    <Head />

    {children}

  </div>

Page.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.node ])
}

const page = css({
  fontFamily: 'Roboto, sans-serif',
  '& a': {
    color: '#0645AD',
    ':hover': { color: '#3366BB' },
    ':active': { color: '#CC2200' }
  }
})

export default Page
