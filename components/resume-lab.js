import React from 'react'

export default () =>
  <section className='section'>
    <div className='section-title'>
      <h1>Lab</h1>
      <p>Things I've built</p>
    </div>
    <div className='section-content'>
      <ul>
        <li>
          <h2><a href='https://github.com/ignaciopicun/vuepacker' target='_blank'>Vuepacker</a></h2>
          <p>Full-featured <a href='https://vuejs.org/'>Vue.js</a> (Runtime only) setup with <a href='https://webpack.js.org/'>Webpack 2</a> including hot reloading, linting (standard), unit testing (jsdom, karma, mocha, chai) and css extraction.</p>
        </li>
        <li>
          <h2><a href='https://github.com/ignaciopicun/generator-elmpacker' target='_blank'>Elmpacker</a></h2>
          <p><a href='http://yeoman.io/'>Yeoman Generator</a> to setup an <a href='http://elm-lang.org/'>Elm</a> project with <a href='https://webpack.js.org/'>Webpack 2</a> including hot reloading, linting (standard), unit testing (elm-test) and css extraction.</p>
        </li>
      </ul>
    </div>
  </section>
