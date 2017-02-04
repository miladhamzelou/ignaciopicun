import React, { PropTypes } from 'react'
import css from 'next/css'

import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'

const Main = ({children, description}) =>
  <div className={page}>
    <Head description={description} />
    <Header />

    {children}

    <Footer />
  </div>

Main.propTypes = {
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

export default Main
