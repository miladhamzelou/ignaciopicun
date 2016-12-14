import React from 'react'
import css from 'next/css'

import Page from '../layouts/page'

import Me from '../components/me'
import Description from '../components/description'

export default () =>
  <Page>

    <section className={me}>
      <Me />
      <Description />
    </section>

  </Page>

const me = css({
  margin: '40px 0 140px',
  padding: '15px'
})
