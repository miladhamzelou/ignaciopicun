import React from 'react'
import { css } from 'glamor'

export default () =>
  <img
    className={img}
    src='/static/images/me.jpg'
    alt='A photo of Ignacio Picun'
    height={60}
  />

const img = css({
  borderRadius: '1000px',
  zIndex: '10',
  transition: 'transform 160ms',
  ':hover, :hover:focus': {
    transform: 'scale(3) translateX(14px) translateY(5px)',
    boxShadow: '0 0 6px rgba(0, 0, 0, .2)'
  }
})
