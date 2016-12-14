import React from 'react'
import css from 'next/css'

export default () =>
  <img
    className={img}
    src='/static/images/me.jpg'
    alt='Ignacio Picun photo'
    height={60}
  />

const img = css({
  borderRadius: '1000px',
  transition: 'transform 160ms',
  ':hover, :hover:focus': {
    transform: 'scale(3) translateX(14px) translateY(5px)',
    boxShadow: '0 0 6px rgba(0, 0, 0, .2)'
  }
})
