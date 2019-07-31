import React from 'react'
import { any } from 'prop-types'
import css from 'styled-jsx/css'
import Header from './header'

const Layout = props => {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        {props.children}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

Layout.propTypes = {
  children: any,
}

export default Layout

const styles = css`
  .layout {
    font-family: 'Roboto', sans-serif;
  }

  .content {
    padding: 30px 50px;
  }

  @media only screen and (max-width: 768px) {
    .content {
      padding: 20px;
    }
  }
`
