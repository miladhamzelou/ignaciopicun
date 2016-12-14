import React, { PropTypes } from 'react'

import Main from './main'

const Page = ({children}) =>
  <Main>

    {children}

  </Main>

Page.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.node ])
}

export default Page
