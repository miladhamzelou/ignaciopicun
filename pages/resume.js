import React from 'react'
import css from 'next/css'
import Page from '../layouts/page'
import Me from '../components/me'
import Experience from '../components/resume-experience'
import Education from '../components/resume-education'
import Languages from '../components/resume-languages'

export default () =>
  <Page>
    <div className={resume}>
      <section className={me}>
        <Me />
      </section>
      <Experience />
      <Education />
      <Languages />
    </div>

  </Page>

const me = css({
  margin: '40px 0 0',
  padding: '15px'
})

const resume = css({
  maxWidth: '920px',
  padding: '0 15px',
  margin: '0 auto',
  '& .section': {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: '"Roboto Mono", monospaced',
    marginBottom: '60px',
    '@media(max-width: 767px)': {
      flexDirection: 'column'
    },
    '& .section-title': {
      marginTop: 0,
      '@media(min-width: 768px)': {
        paddingRight: '30px',
        minWidth: '220px',
        textAlign: 'right'
      },
      '@media(max-width: 767px)': {
        textDecoration: 'underline'
      }
    },
    '& .section-content': {
      flexGrow: 1,
      '@media(min-width: 768px)': {
        borderLeft: '1px solid rgba(0, 0, 0,.3)',
        paddingLeft: '30px'
      },
      '& ul': {
        paddingLeft: '18px',
        margin: 0,
        '& li:not(:last-of-type)': {
          marginBottom: '45px'
        }
      },
      '& h2': {
        marginTop: 0,
        fontSize: '19px',
        '& small': {
          fontSize: '12px',
          color: 'rgba(0, 0, 0, 0.4)'
        }
      },
      '& h3': {
        fontSize: '17px'
      }
    }
  }
})
