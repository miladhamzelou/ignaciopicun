import React, { PropTypes } from 'react'

import Main from './main'

const Page = ({children, description}) =>
  <Main description={description}>

    {children}

  </Main>

Page.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.node ]),
  description: PropTypes.string
}

export default Page
