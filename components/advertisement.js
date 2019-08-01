import React from "react"
import css from "styled-jsx/css"
import dynamic from "next/dynamic"
import { isEmpty } from "lodash"
import { isMobileOnly } from "react-device-detect"
import styled from "styled-components"

const Carousel = dynamic(import("react-multi-carousel"), {
  ssr: false,
});

const AdsImage = styled.div`
  background-image: ${props => `url(${props.src})`};
  height: 200px;
  margin: 0 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1023, min: 465 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
}

const images = [
  'https://cdn.luxstay.com/home/event/event_5_1563156898.jpg',
  'https://cdn.luxstay.com/home/event/event_1_1563507400.jpg',
  'https://cdn.luxstay.com/home/event/event_1_1563941376.jpg',
  'https://cdn.luxstay.com/home/event/event_4_1563507432.jpg',
  'https://cdn.luxstay.com/home/event/event_1_1563950335.png',
  'https://cdn.luxstay.com/home/event/event_1_1564642789.png',
]
const AdsComponent = props => {
    const { title = "", data = [] } = props;
  //   if (isEmpty(data)) return null;

  return (
    <div className="slider">
      {title && <div className="title">{title}</div>}
      <Carousel
        arrows={false}
        showDots
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
      >
        {images.map((item, i) => (
          <AdsImage key={i} src={item} />
        ))}
      </Carousel>
      <style jsx>{styles}</style>
    </div>
  );
};

export default AdsComponent;

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
`;
