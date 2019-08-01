import React from "react";
import css from "styled-jsx/css"
import dynamic from "next/dynamic"
import { isEmpty } from "lodash"
import { isMobileOnly } from "react-device-detect"
import { Button } from "antd"
import styled from "styled-components"

import Card from "./card";

const Carousel = dynamic(import("react-multi-carousel"), {
  ssr: false,
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 3,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30,
  },
};

const RightArrow = styled.div`
  position: absolute;
  top: 45px;
  right: 20px;
`;

const LeftArrow = styled.div`
  position: absolute;
  top: 40px;
  left: 15px;
`;

const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <RightArrow>
      <Button
        onClick={() => onClick()}
        type="danger"
        shape="circle"
        size="large"
        icon="right"
      />
    </RightArrow>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <LeftArrow>
      <Button
        onClick={() => onClick()}
        type="danger"
        shape="circle"
        size="large"
        icon="left"
      />
    </LeftArrow>
  );
};

const Slider = props => {
  const { title = "", data = [] } = props;
  if (isEmpty(data)) return null;

  return (
    <div className="slider">
      {title && <div className="title">{title}</div>}
      <Carousel
        partialVisbile={isMobileOnly}
        arrows={!isMobileOnly}
        responsive={responsive}
        itemClass="image-item"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {data.map((item, i) => (
          <div key={i} className="slide-item">
            <Card {...item} />
          </div>
        ))}
      </Carousel>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Slider;

const styles = css`
  .title {
    font-weight: 700;
    font-size: 22px;
    margin: 0 0 13px 5px;
  }

  .slide-item {
    height: 340px;
    margin: 0 5px;
  }

  @media only screen and (max-width: 767px) {
    .slide-item {
      height: 300px;
    }
  }
`;
