import React from 'react'
import css from 'next/css'

export default () =>
  <section className='section'>
    <div className='section-title'>
      <h1>Experience</h1>
    </div>
    <div className='section-content'>
      <ul>
        <li className='job'>
          <h2 className='company'>
            <a href='http://kzsoftworks.com/'>Kaizen Softworks</a>
            {' '}
            <small className='dates'>June 2015 - Present (1 year 8 months)</small>
          </h2>
          <div className='position'>Front End Developer</div>
        </li>
        <li className='job'>
          <h2 className='company'>
            <a href='https://www.uruit.com/'>UruIT</a>
            {' '}
            <small className='dates'>July 2014 - November 2014 (5 months)</small>
          </h2>
          <div className='position'>Front End Developer</div>
        </li>
        <li className='job'>
          <h2 className='company'>
            <a href='http://www.kreitech.com.uy/'>Kreitech Software</a>
            {' '}
            <small className='dates'>July 2014 - November 2014 (5 months)</small>
          </h2>
          <div className='position'>Full Stack Developer</div>
        </li>
        <li className='job'>
          <h2 className='company'>
            <a href='https://sophilabs.co/'>Sophilabs</a>
            {' '}
            <small className='dates'>February 2014 - April 2014 (3 months)</small>
          </h2>
          <div className='position'>Full Stack Developer</div>
        </li>
        <li className='job'>
          <h2 className='company'>
            <a href='http://www.tcs.com/'>Tata Consultancy Services</a>
            {' '}
            <small className='dates'>May 2013 - January 2014 (9 months)</small>
          </h2>
          <div className='position'>Full Stack Developer</div>
        </li>
      </ul>
    </div>
  </section>

