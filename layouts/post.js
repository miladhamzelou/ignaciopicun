import React, { PropTypes } from 'react'

import Main from './main'

const Post = ({children}) =>
  <Main>

    {children}

  </Main>

Post.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.node ])
}

export default Post
