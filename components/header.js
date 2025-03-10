/* global google */
import React, { useState, useContext, useEffect, createRef } from 'react'
import css from 'styled-jsx/css'
import { Button, Modal, Menu, Dropdown, Icon, Avatar, Badge } from 'antd'
import { isMobileOnly } from 'react-device-detect'
import GoogleMapReact from 'google-map-react'
import Router from 'next/router'

import LoginForm from './loginForm'
import AuthContext from './authContext'
import { googleMapKey } from '../config'

const logoUrl =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

const Header = () => {
  const { isLogin, login, googleLogin, facebookLogin, logout } = useContext(
    AuthContext
  );
  const [showLogin, setShowLogin] = useState(false);
  const searchInput = createRef();
  let searchBox;
  const center = { lat: 10.777889, lng: 106.695444 };

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

  const apiLoaded = maps => {
    // vietnam bounding boxes
    // data get from https://gist.github.com/graydon/11198540
    const vietnamBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(8.1790665, 102.14441),
      new google.maps.LatLng(23.393395, 114.3337595)
    );

    searchBox = new maps.places.SearchBox(searchInput.current, {
      bounds: vietnamBounds,
    });
    searchBox.addListener("places_changed", onPlacesChanged);
  };

  // search box
  const onPlacesChanged = () => {
    const [
      { name = "", geometry: { location } = {} } = {},
    ] = searchBox.getPlaces() || [];

    let urlAddress = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    urlAddress = urlAddress.replace(/,/g, '').replace(/ /g, '-')
    const lat = location.lat()
    const lng = location.lng()
    Router.push(`/search-page/${urlAddress}?lat=${lat}&lng=${lng}`)
  };

  useEffect(() => {
    setShowLogin(false);
  }, [isLogin]);

  return (
    <div className="header-block">
      <div className="header">
        <a href="/" className="logo">
          <img src={logoUrl} alt="logo" className="img-logo" />
        </a>
        <div className="search">
          <input
            ref={searchInput}
            placeholder="Tìm kiếm"
            className="search-place"
          />
          <Button shape="circle" icon="search" />
        </div>
        <div className="menu">
          <div className="menu-mobile">
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
          <div className="menu-desktop">
            <Button type="danger" ghost onClick={() => setShowLogin(true)}>
              Đăng nhập
            </Button>
          </div>
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
      <GoogleMapReact
        bootstrapURLKeys={{
          key: googleMapKey,
          language: "vi",
          libraries: ["places"],
        }}
        center={center}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ maps }) => apiLoaded(maps)}
      />
      <style jsx>{styles}</style>
    </div>
  );
};

export default Header;

const styles = css`
  .header-block {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100vw;
  }
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
    border: 1px solid #ff4d4f;
    color: #fff;
    margin-left: 7px;
  }

  .search-place {
    margin: 10px;
    font-size: 15px;
    border: 0;
    border-bottom: 1px solid #cdcdcd;
    width: 370px;
    -webkit-box-shadow: none;
    box-shadow: 0;
    outline: none;
  }

  .search-place:focus {
    border-bottom-color: #ff4d4f;
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

  .menu-mobile {
    display: none
  }

  @media only screen and (max-width: 576px) {
    .logo {
      margin: 0 15px;
    }

    .menu {
      margin: 3px 20px;
    }

    .search-place {
      display: none;
    }
  }

  @media only screen and (max-width: 812px) {
    .menu-mobile {
      display: block;
    }
    .menu-desktop {
      display: none;
    }
  }
`;
