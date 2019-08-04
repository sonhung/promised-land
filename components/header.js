import React, { useState, useContext, useEffect } from "react";
import css from "styled-jsx/css";
import {
  Button,
  Modal,
  Input,
  Menu,
  Dropdown,
  Icon,
  Avatar,
  Badge
} from "antd";
import { isMobileOnly } from "react-device-detect";

import LoginForm from "./loginForm";
import AuthContext from "./authContext";

const logoUrl =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

const Header = () => {
  const { isLogin, login, googleLogin, facebookLogin, logout } = useContext(
    AuthContext
  );
  const [showLogin, setShowLogin] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => setShowLogin(true)}>Đăng nhập</div>
      </Menu.Item>
      {/* <Menu.Item>
        <a >
          Đăng ký
        </a>
      </Menu.Item> */}
    </Menu>
  );
  const menuLogin = (
    <Menu>
      <Menu.Item>
        <div onClick={logout}>Đăng xuất</div>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    setShowLogin(false);
  }, [isLogin]);

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logoUrl} alt="logo" className="img-logo" />
        </div>
        <div className="search">
          {!isMobileOnly && (
            <Input placeholder="Search" style={{ width: 400 }} size="default" />
          )}
          <Button shape="circle" icon="search" />
        </div>
        <div className="menu">
          {isMobileOnly && (
            <div>
              <Dropdown
                overlay={isLogin ? menuLogin : menu}
                placement="bottomRight"
              >
                <Icon
                  type="menu"
                  style={{ color: "rgba(0,0,0,.25)", fontSize: "26px" }}
                />
              </Dropdown>
            </div>
          )}
          {!isMobileOnly && !isLogin && (
            <div>
              {/* <Button type="primary" ghost>
              Đăng ký
            </Button> */}
              <Button type="danger" ghost onClick={() => setShowLogin(true)}>
                Đăng nhập
              </Button>
            </div>
          )}
          {!isMobileOnly && isLogin && (
            <div className="browser-menu">
              <Button type="danger" ghost>
                Đăng tin
              </Button>
              <div className="notification">
                <Badge dot offset={[-7, 5]}>
                  <Icon type="bell" style={{ fontSize: "26px" }} />
                </Badge>
              </div>
              <Dropdown overlay={menuLogin} placement="bottomRight">
                <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
              </Dropdown>
            </div>
          )}
        </div>
      </div>
      <Modal
        centered
        footer={null}
        visible={showLogin && !isLogin}
        onCancel={() => setShowLogin(false)}
        bodyStyle={{ backgroundColor: "#f0f2f5", borderRadius: "5px" }}
        width={400}
      >
        <LoginForm
          login={login}
          googleLogin={googleLogin}
          facebookLogin={facebookLogin}
        />
      </Modal>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Header;

const styles = css`
  .header {
    display: flex;
    flex: 1;
    flex-wrap: nowrap;
    z-index: 10;
    height: 62px;
    max-width: 100%;
    background: #fff;
    -webkit-box-shadow: 0 2px 8px #f0f1f2;
    box-shadow: 0 2px 8px #f0f1f2;
    padding-top: 13px;
  }

  .logo {
    order: 1;
    margin: 0 20px 0 70px;
  }

  .img-logo {
    height: 35px;
  }

  .search {
    flex: 1;
    order: 2;
  }

  .search :global(button) {
    background-color: #ff4d4f;
    color: #fff;
    margin-left: 7px;
  }

  .menu {
    margin: 0 70px 0 20px;
    order: 3;
  }

  .menu :global(button) {
    margin-left: 7px;
  }

  .img-logo {
    height: 35px;
  }

  .browser-menu {
    display: flex;
  }
  .notification {
    margin: 5px 20px;
  }

  @media only screen and (max-width: 576px) {
    .logo {
      margin: 0 15px;
    }

    .menu {
      margin: 3px 20px;
    }
  }
`;
