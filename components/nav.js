import React, { Component, PropTypes } from 'react'
import css from 'next/css'
import Link from 'next/link'
import Icon from 'react-fontawesome'

class Nav extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav () {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    return (
      <nav className={`${nav} ${this.props.collapse ? 'collapse' : ''}`}>
        <button
          onClick={this.toggleNav}
          type='button'
          className='collapse-button'
        >
          <Icon name='bars' />
        </button>
        <ul className={`${this.state.open ? 'open' : ''}`}>
          <li><Link href='/'>/home</Link></li>
          <li><Link href='/resume'>/resume</Link></li>
          <li>
            <a href='https://twitter.com/ignaciopicun' target='_blank'>
              /
              <span className='show-big'><Icon name='twitter' /></span>
              <span className='show-small'>twitter</span>
            </a>
          </li>
          <li>
            <a href='https://github.com/ignaciopicun' target='_blank'>
              /
              <span className='show-big'><Icon name='github' /></span>
              <span className='show-small'>github</span>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/ignaciopicun' target='_blank'>
              /
              <span className='show-big'><Icon name='linkedin' /></span>
              <span className='show-small'>linkedin</span>
            </a>
          </li>
          <li>
            <a href='mailto:picunignacio@gmail.com'>
              <span className='show-big'><Icon name='envelope-open-o' /></span>
              <span className='show-small'>/email_me</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

Nav.propTypes = {
  collapse: PropTypes.bool
}

const nav = css({
  '& .collapse-button': { display: 'none' },
  '& .show-small': { display: 'none' },
  '& .show-big': { display: 'inline' },
  '& ul': {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    '& li:not(:last-child)': {
      marginRight: '30px'
    }
  },
  '& a': {
    fontSize: '16px',
    textDecoration: 'none',
    fontFamily: 'Roboto Mono',
    whiteSpace: 'nowrap'
  },
  '@media(max-width: 768px)': {
    '&.collapse': {
      '& ul': {
        flexDirection: 'column',
        maxHeight: '0',
        border: 'none',
        overflow: 'hidden',
        transition: 'max-height .3s',
        position: 'absolute',
        left: '0',
        top: '130px',
        width: '100%',
        background: '#ffffff',
        '& li': {
          marginRight: 'auto',
          width: '100%',
          '& a': {
            display: 'block',
            boxSizing: 'border-box',
            padding: '15px',
            width: '100%',
            ':hover': { background: '#fafafa' },
            ':active': { background: '#f0f0f0' }
          }
        },
        '&.open': {
          maxHeight: '700px',
          borderBottom: '1px solid #ccc'
        }
      },
      '& .collapse-button': {
        display: 'block',
        height: '40px',
        width: '40px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        ':hover': { background: '#fafafa' },
        ':active': { background: '#f0f0f0' }
      },
      '& .show-small': { display: 'inline' },
      '& .show-big': { display: 'none' }
    }
  }
})

export default Nav
