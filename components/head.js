import React, {PropTypes} from 'react'
import Head from 'next/head'

const PageHead = ({children}) =>
  <Head>
    <title>Ignacio Picun, developer</title>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    {children}
  </Head>

PageHead.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.node, PropTypes.element ])
}

export default PageHead
