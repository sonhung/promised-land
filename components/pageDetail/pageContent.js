import React from "react";
import css from "styled-jsx/css";
import { Row, Col, Breadcrumb, Icon, Button } from "antd";
import { Link } from "react-scroll";

import { HOUSE_TYPE } from "../../constants";
import { formatPrice } from "../../utils";
import wcIcon from "../../assets/images/wc.svg";
import bedRoom from "../../assets/images/bedroom.svg";
import PageMap from "./pageMap";

const PageDetail = props => {
  const {
    title,
    area,
    raw_address,
    prop_type,
    n_floors,
    n_bedrooms,
    n_wcs,
    n_livingrooms,
    n_kitchens,
    price,
    direction,
    description,
    width,
    height,
    nearPlaces = [],
    location = {}
  } = props;

  return (
    <div className="content">
      <Row>
        <Col lg={16} md={14}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="/">Promised Land</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">{HOUSE_TYPE[prop_type]}</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Tp. Hồ Chí Minh</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="title">{title}</div>
          <div className="type filed">
            <Icon
              type="bank"
              style={{ color: "rgba(0,0,0,.35)", fontSize: "23px" }}
            />
            <span>
              {HOUSE_TYPE[prop_type]} · {area} m<sup>2</sup>
            </span>
          </div>
          <div className="location filed">
            <Icon
              type="environment"
              style={{ color: "rgba(0,0,0,.35)", fontSize: "23px" }}
            />
            <span>{raw_address}</span>
            <Link className="link-map" to="view-map" spy smooth duration={500}>
              Xem bản đồ
            </Link>
          </div>
          <div className="description">{description}</div>
          <div className="detail">
            <span>Thông tin chi tiết</span>
            <Row>
              {height && (
                <Col lg={8} xs={12}>
                  <Icon
                    type="border-left"
                    style={{ color: "rgba(0,0,0,.35)", fontSize: "23px" }}
                  />
                  Chiều dài: {height}m
                </Col>
              )}
              {width && (
                <Col lg={8} xs={12}>
                  <Icon
                    type="border-bottom"
                    style={{ color: "rgba(0,0,0,.35)", fontSize: "23px" }}
                  />
                  Chiều rộng: {width}m
                </Col>
              )}
              {n_floors && (
                <Col lg={8} xs={12}>
                  <Icon
                    type="database"
                    style={{ color: "rgba(0,0,0,.35)", fontSize: "23px" }}
                  />
                  Tổng số tầng: {n_floors}
                </Col>
              )}
              {direction && (
                <Col lg={8} xs={12}>
                  <Icon
                    type="fullscreen"
                    style={{ color: "rgba(0,0,0,.35)", fontSize: "23px" }}
                  />
                  Hướng: {direction}
                </Col>
              )}
              {n_bedrooms && (
                <Col lg={8} xs={12}>
                  <img src={bedRoom} className="img-icon" />
                  Phòng ngủ: {n_bedrooms}
                </Col>
              )}
              {n_livingrooms && (
                <Col lg={8} xs={12}>
                  <Icon
                    type="gold"
                    style={{ color: "rgba(0,0,0,.35)", fontSize: "23px" }}
                  />
                  Phòng khách: {n_livingrooms}
                </Col>
              )}
              {n_kitchens && (
                <Col lg={8} xs={12}>
                  <Icon
                    type="fire"
                    style={{ color: "rgba(0,0,0,.35)", fontSize: "23px" }}
                  />
                  Phòng bếp: {n_kitchens}
                </Col>
              )}
              {n_wcs && (
                <Col lg={8} xs={12}>
                  <img src={wcIcon} className="img-icon" />
                  Phòng vệ sinh: {n_wcs}
                </Col>
              )}
            </Row>
          </div>
          <div className="map" name="view-map">
            <PageMap location={location} nearPlaces={nearPlaces} />
          </div>
        </Col>
        <Col lg={8} md={10}>
          <div className="info">
            <div className="price">{formatPrice(price)}đ</div>
            <div className="area">
              <Icon
                type="scan"
                style={{ color: "rgba(0,0,0,.25)", fontSize: "21px" }}
              />
              <span>
                {area}m<sup>2</sup>
              </span>
            </div>
            <div className="time">
              <Icon
                type="calendar"
                style={{ color: "rgba(0,0,0,.25)", fontSize: "21px" }}
              />
              <span>01-08-2019</span>
            </div>
            <div className="location">
              <Icon
                type="environment"
                style={{ color: "rgba(0,0,0,.25)", fontSize: "21px" }}
              />
              <span>{raw_address}</span>
            </div>

            <div className="contact">
              <Button type="danger" block>
                <Icon type="phone" />
                0383838383
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <div className="mobile-show-info">
        <span className="mobile-price">{formatPrice(price)}đ</span>
        <Button type="danger">
          <Icon type="phone" />
          0383838383
        </Button>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

PageDetail.propTypes = {};

export default PageDetail;

const styles = css`
  .title {
    font-size: 30px;
    font-weight: 700;
    margin: 20px 0;
  }

  .filed {
    font-size: 16px;
    font-weight: 500;
    margin: 3px 0;
  }

  .filed :global(span) {
    position: relative;
    top: -2px;
    margin-left: 10px;
  }

  .filed :global(a) {
    position: relative;
    top: -2px;
    color: #ff4d4f;
    margin-left: 7px;
  }

  sup {
    position: relative;
    top: -3px;
  }

  .description {
    margin: 20px 0;
    text-align: justify;
    font-size: 16px;
  }

  .info {
    margin: 75px 0 0 50px;
    padding: 15px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  .info :global(div) {
    margin: 13px 0;
  }

  .info :global(span) {
    position: relative;
    top: -2px;
    margin-left: 10px;
  }

  .price {
    font-size: 25px;
    font-weight: 500px;
    color: #ff4d4f;
  }
  .contact :global(button) {
    background-color: #ff4d4f;
    color: #fff;
  }

  .detail :global(span) {
    font-size: 22px;
    font-weight: 500;
  }

  .detail :global(div) {
    font-size: 16px;
    margin: 7px 0;
  }

  .detail :global(i) {
    margin-right: 7px;
    position: relative;
    top: 2px;
  }

  .img-icon {
    color: rgba(0, 0, 0, 0.25);
    height: 22px;
    position: relative;
    top: -2px;
    margin-right: 7px;
  }

  .mobile-show-info {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    margin-left: -25px;
    background-color: #fff;
    border-top: 1px solid #cdcdcd;
    padding: 10px;
    display: none;
  }

  .mobile-show-info :global(button) {
    float: right;
    background-color: #ff4d4f;
    color: #fff;
    height: 50px;
  }

  .mobile-price {
    font-size: 25px;
    font-weight: 700;
    color: #ff4d4f;
    position: relative;
    top: 5px;
  }

  @media only screen and (max-width: 767px) {
    .mobile-show-info {
      display: block;
    }

    .info {
      display: none;
    }
  }
`;
