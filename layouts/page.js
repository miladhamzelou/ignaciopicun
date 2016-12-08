import React, {PropTypes} from 'react'

import Head from '../components/head'

const Page = ({children}) =>
  <div>
    <Head />
    {children}
  </div>

Page.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.node ])
}

export default Page
