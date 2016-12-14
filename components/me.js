import React from 'react'
import css from 'next/css'

const Location = () =>
  <em>
    <a href='https://www.google.com.uy/maps/place/Montevideo,+Montevideo+Department/@-35.5810119,-57.0929529,4z/data=!4m5!3m4!1s0x959f80ffc63bf7d3:0x6b321b2e355bec99!8m2!3d-34.9011127!4d-56.1645314?hl=en'>
      UTC-3 (Montevideo, Uruguay)
    </a>
  </em>

export default () =>
  <section className={me}>
    <h1>Ignacio Picun</h1>
    <h2>Freelance Web Developer</h2>
    <div className='description'>
      <p>
        <strong>Available for Hire</strong> and freelancing currently from
        {' '}<Location />.
      </p>
      <p>
        I've been developing <em>Websites</em> and <em>Applications</em>
        {' '}for 4 years. And Besides coding, I love all Internet things like
        {' '}Startups, Analytics and Big Data among others topics.
      </p>
      <p>
        When I'm not hacking a new app or investigating on any new technology,
        {' '}I love playing the bass or cycling around.
      </p>
    </div>
  </section>

const me = css({
  padding: '15px',
  textAlign: 'center',
  margin: '60px 0 120px',
  '& .description': {
    fontFamily: 'Roboto Mono',
    maxWidth: '680px',
    lineHeight: '26px',
    margin: '40px auto'
  },
  '& h1': {
    fontSize: '96px',
    margin: '26px 0'
  },
  '& h2': {
    fontSize: '32px',
    fontWeight: 'lighter',
    margin: '34px 0',
    color: '#818181'
  },
  '@media(max-width: 768px)': {
    margin: '30px 0 30px',
    '& h1': {
      fontSize: '72px',
      margin: '26px 0'
    }
  },
  '@media(max-width: 480px)': {
    margin: '0',
    '& h1': {
      fontSize: '42px'
    },
    '& h2': {
      fontSize: '22px'
    }
  }
})
