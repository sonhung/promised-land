import React from 'react'
import { any } from 'prop-types'
import css from 'styled-jsx/css'
import Header from './header'
import Footer from './footer'

const Layout = props => {
  return (
    <div className="layout">
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
      <style jsx>{styles}</style>
    </div>
  );
};

Layout.propTypes = {
  children: any,
};

export default Layout;

const styles = css`
  .layout {
    font-family: "Roboto", sans-serif;
    color: #222;
  }

  .content {
    padding: 30px 50px;
    min-height: calc(100vh - 152px);
    margin-top: 60px;
  }

  @media only screen and (max-width: 768px) {
    .content {
      padding: 15px;
    }
  }
`;
