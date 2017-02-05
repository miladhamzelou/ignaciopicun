import React from 'react'
import { css } from 'glamor'

import Page from '../layouts/page'

import Me from '../components/me'
import Description from '../components/description'

const description = 'Ignacio Picun is a Creative Front End Web Developer that uses web technologies like HTML, CSS and Javascript to develop Applications.'

export default () =>
  <Page description={description}>

    <section className={me}>
      <Me />
      <Description />
    </section>

  </Page>

const me = css({
  margin: '40px 0 140px',
  padding: '15px'
})
