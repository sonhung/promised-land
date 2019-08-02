import React from 'react'
import css from 'styled-jsx/css'
import dynamic from 'next/dynamic'
import { isEmpty } from 'lodash'
import { isMobileOnly } from 'react-device-detect'
import { Button } from 'antd'
import styled from 'styled-components'

const Slider = dynamic(import('react-slick'), {
  ssr: false,
})

const settings = {
  className: "",
  slidesToShow: 2,
  slidesToScroll: 1,
}

const Carousel = props => {
  const { data = [] } = props
  if (isEmpty(data)) return null

  return (
    <div className="slider">
      <Slider {...settings}>
        {data.map((item, i) => (
          <img src={item} className="carousel-img" />
        ))}

      </Slider>
      {/* <Carousel
        partialVisbile={isMobileOnly}
        arrows={!isMobileOnly}
        responsive={responsive}
        itemClass="image-item"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {data.map((item, i) => (
          <div key={i} className="slide-item">
            <img src={item} className="carousel-img" />
          </div>
        ))}
      </Carousel> */}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Carousel;

const styles = css`
  .slide-item {
    width: 100%;
    height: 200px;
  }

  .carousel-img {
    /* object-fit: contain; */
    /* width: 20px; */
    height: 300px;
  }

  .right-arrow {
    position: absolute;
    top: 40px;
    right: 15px;
  }

  .left-arrow {
    position: absolute;
    top: 40px;
    left: 15px;
  }
`;
