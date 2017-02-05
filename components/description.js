import React from 'react'
import { css } from 'glamor'

const Location = () =>
  <em>
    <a target='_blank' href='https://www.google.com.uy/maps/place/Montevideo,+Montevideo+Department/@-35.5810119,-57.0929529,4z/data=!4m5!3m4!1s0x959f80ffc63bf7d3:0x6b321b2e355bec99!8m2!3d-34.9011127!4d-56.1645314?hl=en'>
      UTC-3 (Montevideo, Uruguay)
    </a>
  </em>

export default () =>
  <div className={description}>
    <p>
      <strong>Available for Hire</strong> and freelancing currently from
      {' '}<Location />.
    </p>
    <p>
      I've been developing <em>Websites</em> and <em>Applications</em>
      {' '}for 4 years. And Besides coding, I love all Internet things like
      {' '}Analytics and Big Data among others topics.
    </p>
    <p>
      When I'm not coding a new app or investigating on any new technology,
      {' '}I love playing the bass or cycling around.
    </p>
  </div>

const description = css({
  fontFamily: 'Roboto Mono',
  maxWidth: '680px',
  lineHeight: '26px',
  margin: '0 auto',
  textAlign: 'center'
})
