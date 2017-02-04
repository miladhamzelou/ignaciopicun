import React, { PropTypes } from 'react'
import Head from 'next/head'

const PageHead = ({children, description}) =>
  <Head>
    <title>Ignacio Picun / Front End Web Developer</title>
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1' />
    <meta
      name='description'
      content={description} />
    <meta
      name='keywords'
      content='Web Designer, Front End, CSS, JavaScript, HTML, Development, Developer, EcmaScript' />
    <link rel='shortcut icon'
      href='static/favicon.ico' />
    <link
      href='https://fonts.googleapis.com/css?family=Roboto:300,400|Roboto+Mono:300,400'
      rel='stylesheet' />
    <link
      href='https://necolas.github.io/normalize.css/5.0.0/normalize.css'
      rel='stylesheet' />
    <link
      href='/static/main.css'
      rel='stylesheet' />
    <script src='https://use.fontawesome.com/5ff672ace4.js' />

    {children}

  </Head>

PageHead.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.node, PropTypes.element ]),
  description: PropTypes.string
}

export default PageHead
