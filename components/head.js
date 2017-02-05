import React, { Component, PropTypes } from 'react'
import Head from 'next/head'

class PageHead extends Component {

  render () {
    const { children, description } = this.props

    return (
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

        { process.env.NODE_ENV === 'production' && (
        <script dangerouslySetInnerHTML={{__html: `
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-91446109-1', 'auto');
          ga('send', 'pageview');
        `}} />
        ) }

        {children}

      </Head>
    )
  }
}

PageHead.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.node, PropTypes.element ]),
  description: PropTypes.string,
  env: PropTypes.string
}

export default PageHead
