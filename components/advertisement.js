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

const AdsText = styled.div`
  height: 100px;
  margin: 0 5px;
  padding: 18px 24px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.06);
  border: 1px solid rgba(0,0,0,.1);
  background-color: #fff;
  color: #222;
  cursor: pointer;
`

const AdsName = styled.div`
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const AdsAddress = styled.div`
  font-size: 16px;
  display: -webkit-box;
  max-height: 52px;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
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


const adsData = [
  {
    name: 'Căn hộ cao cấp Vincity quận 9',
    address: 'Nguyễn Xiển, Long Bình, Quận 9, TP. Hồ Chí Minh',
    src: 'https://cdn.luxstay.com/home/event/event_5_1563156898.jpg'
  },
  {
    name: 'Asiana Capella',
    address: '184 Trần Văn Kiểu, P. 10, Q. 6, TP. Hồ Chí Minh',
    src: 'https://cdn.luxstay.com/home/event/event_1_1563507400.jpg'
  },
  {
    name: 'Charmington Iris',
    address: '76 Tôn Thất Thuyết, P.16, Q.4, TP. Hồ Chí Minh',
    src: 'https://cdn.luxstay.com/home/event/event_1_1563941376.jpg'
  },
  {
    name: 'Căn hộ Venus Quận 8',
    address: '175 Phạm Hùng, Phường 4, Quận 8, TP. Hồ Chí Minh',
    src: 'https://cdn.luxstay.com/home/event/event_4_1563507432.jpg',
  },
  {
    name: 'Chung cư Ventosa 66 Tân Thành',
    address: '66 Tân Thành, Phường 12, Quận 5, TP. Hồ Chí Minh',
    src: 'https://cdn.luxstay.com/home/event/event_1_1563950335.png',
  },
  {
    name: ' Căn hộ Riva Park Nguyễn Tất Thành',
    address: '504 Nguyễn Tất Thành, Phường 18, Quận 4, TP. Hồ Chí Minh',
    src: 'https://cdn.luxstay.com/home/event/event_1_1564642789.png',
  }
]
const AdsComponent = props => {
  const { title = "", data = [], type } = props;
  //   if (isEmpty(data)) return null;

  return (
    <div className="slider">
      {title && <div className="title">{title}</div>}
      <Carousel
        arrows={false}
        showDots={type === 'image'}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={5000}
        infinite
      >
        {adsData.map((item, i) => (<div>
          {type === 'image' && <AdsImage key={i} src={item.src} />}
          {type === 'text' && <AdsText key={i}>
            <AdsName>{item.name}</AdsName>
            <AdsAddress className="address">{item.address}</AdsAddress>
          </AdsText>}
        </div>
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
