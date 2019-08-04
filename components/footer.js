import React from "react"
import { any } from "prop-types"
import css from "styled-jsx/css"
import { Icon } from 'antd'

const Footer = () => {
  const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  })
  return (
    <div className="footer">
      <div className="content">
        © 2019 Promised Land
        <div className="contact">
          <IconFont type="icon-facebook" style={{ fontSize: '23px' }} />
          <IconFont type="icon-twitter"  style={{ fontSize: '23px' }} />
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

Footer.propTypes = {
};

export default Footer;

const styles = css`
  .footer {
    height: 90px;
    border-top: 1px solid #f2f2f2;
    background-color: #fff;
    padding: 35px 75px;
  }

  .content {
    display: inherit;
    font-size: 15px;
  }

  .contact {
    float: right;
    text-align: right;
  }

  .contact :global(i) {
    margin: 0 7px;
  }

  @media only screen and (max-width: 767px) {
    .footer {
      height: 120px;
      padding: 15px;
    }
  }

`;
