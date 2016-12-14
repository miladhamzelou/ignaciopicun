import React, { PropTypes } from 'react'
import Markdown from 'react-markdown'

import Main from './main'

const Post = ({children}) =>
  <Main>
    <Markdown source={children} />
  </Main>

Post.propTypes = {
  children: PropTypes.string
}

export default Post
