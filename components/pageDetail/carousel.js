import React, { useState, useRef } from 'react'
import css from 'styled-jsx/css'
import { isEmpty } from 'lodash'
import styled from 'styled-components'
import { Row, Col, Icon } from 'antd'
import disableScroll from 'disable-scroll'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Img = styled.img`
  object-fit: cover;
  height: ${props => (props.large ? "442px" : "220px")};
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  transform: scale(1) !important;
  transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s !important;
  &:hover {
    transform: scale(1.05) !important;
    filter: brightness(120%);
    transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
      -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
      transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s !important;
  }
  @media (max-width: 1024px) {
    height: ${props => (props.large ? "302px" : "150px")};
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  border: 1px solid #000;
`;

const Image = data => (
  <ImageContainer>
    <Img {...data} />
  </ImageContainer>
);

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  focusOnSelect: true,
  // arrows: false
};

const Carousel = props => {
  const { data = [] } = props;
  if (isEmpty(data)) return null;

  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const totalItem = data.length;
  const totalIndex = totalItem - 1;

  if (totalItem < 3) settings["slidesToShow"] = totalItem;

  const viewGallery = index => () => {
    settings["initialSlide"] = index;
    setCurrentIndex(index);
    setShowGallery(true);
    disableScroll.on();
  };

  const preImage = () => {
    const index = currentIndex === 0 ? totalIndex : currentIndex - 1;
    setCurrentIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  const nextImage = () => {
    const index = currentIndex === totalIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  const gotoIndex = index => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="carousel">
        <Row>
          {totalItem === 1 && (
            <Col md={24}>
              <Image src={data[0]} large onClick={viewGallery(0)} />
            </Col>
          )}
          {totalItem > 1 && (
            <div>
              <Col md={12}>
                <Image src={data[0]} large onClick={viewGallery(0)} />
              </Col>
              {totalItem < 5 && <div className="hide-mobile">
                <Col md={12}>
                  <Image src={data[1]} large onClick={viewGallery(1)} />
                </Col>
              </div>}
              {totalItem > 4 && (
                <div className="hide-mobile">
                  <Col md={12}>
                    <Row>
                      <Col md={12}>
                        <Image src={data[1]} onClick={viewGallery(1)} />
                      </Col>
                      <Col md={12}>
                        <Image src={data[2]} onClick={viewGallery(2)} />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <Image src={data[3]} onClick={viewGallery(3)} />
                      </Col>
                      <Col md={12}>
                        <Image src={data[4]} onClick={viewGallery(4)} />
                      </Col>
                    </Row>
                  </Col>
                </div>
              )}
            </div>
          )}
        </Row>
      </div>
      {showGallery && (
        <div className="modal">
          <span
            className="close"
            onClick={() => {
              setShowGallery(false);
              disableScroll.off();
            }}
          >
            <Icon type="close" style={{ color: "#000", fontSize: "30px" }} />
          </span>
          <div className="gallery">
            <Row>
              <Col xl={16} lg={24}>
                <div>
                  <img src={data[currentIndex]} className="fixed-image" />
                  <button className="arrow arrow-left" onClick={preImage}>
                    <Icon
                      type="left"
                      style={{ color: "#000", fontSize: "30px" }}
                    />
                  </button>
                  <button className="arrow arrow-right" onClick={nextImage}>
                    <Icon
                      type="right"
                      style={{ color: "#000", fontSize: "30px" }}
                    />
                  </button>
                </div>
                <img src={data[currentIndex]} className="view-image" />
              </Col>
              <Col xl={8} lg={24}>
                <div className="slider">
                  <div className="count">
                    {" "}
                    {currentIndex + 1} / {totalIndex + 1}
                  </div>
                  <Slider {...settings} ref={sliderRef}>
                    {data.map((item, i) => (
                      <div key={i} onClick={() => gotoIndex(i)}>
                        <img
                          src={item}
                          className={`img-thumbnail ${
                            i === currentIndex ? "img-focus" : ""
                          }`}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Carousel;

const styles = css`
  .carousel {
    margin: -30px -50px;
  }

  .carousel:hover {
    filter: brightness(80%);
  }

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    background: #fff;
  }

  .close {
    position: absolute;
    top: 30px;
    right: 37px;
    cursor: pointer;
  }

  .gallery {
    margin: 70px 50px 0;
  }

  .fixed-image {
    visibility: hidden;
    max-height: 75vh;
    max-width: 85%;
  }

  .view-image {
    max-height: 75vh;
    max-width: 85%;
    object-fit: contain;
    cursor: pointer;
    z-index: 2;
    border-radius: 16px;
    position: absolute;
    margin: 0px auto;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  .arrow {
    width: 50%;
    position: absolute;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .arrow-right {
    text-align: right;
    right: 0;
  }

  .arrow-left {
    text-align: left;
    left: 0;
  }

  .count {
    font-size: 18px;
    margin-bottom: 13px;
  }

  .img-thumbnail {
    width: 90%;
    height: 100px;
    object-fit: cover;
    border-radius: 9px;
    cursor: pointer;
    opacity: 0.6;
  }

  .img-focus {
    border: 2px solid #000;
    opacity: 1;
  }

  @media only screen and (max-width: 768px) {
    .carousel {
      margin: -30px -15px;
    }

    .img-thumbnail {
      height: 60px;
    }

    .arrow-right {
      right: -10px;
    }

    .arrow-left {
      text-align: left;
      left: -10px;
    }
  }

  @media only screen and (max-width: 767px) {
    .hide-mobile {
      display: none;
    }
  }
`;
