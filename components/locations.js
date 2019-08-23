import React from 'react'
// import { any } from 'prop-types'
import { BrowserView, MobileView } from 'react-device-detect'
import css from 'styled-jsx/css'
import { Row, Col, Button } from 'antd'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

const Carousel = dynamic(import('react-multi-carousel'), {
  ssr: false,
});

const LOCATIONS = [
  {
    type: "tp-ho-chi-minh",
    name: "Sài Gòn",
    img:
      "http://cdn01.diadiemanuong.com/ddau/640x/gioi-tre-keo-nhau-san-top-diem-checkin-free-nhung-sieu-dep-o-sai-gon-ca34c9ed636680446109410185.jpg",
  },
  {
    type: "ha-noi",
    name: "Hà Nội",
    img:
      "http://downtownpainesville.org/wp-content/uploads/2018/07/ha-noi-co-bao-nhieu-quan8.jpg",
  },
  {
    type: "da-nang",
    name: "Đà Nẵng",
    img:
      "https://cafebiz.cafebizcdn.vn/thumb_w/600/2019/photo1559568257252-1559568257385-crop-1559568275255422937766.jpg",
  },
  {
    type: "bình-duong",
    name: "Bình Dương",
    img:
      "http://diendan.fall.vn/stores/news_dataimages/hiep/042018/28/08/085708baoxaydung_image001.jpg",
  },
  {
    type: "dong-nai",
    name: "Đồng Nai",
    img:
      "https://vnn-imgs-f.vgcloud.vn/2018/10/12/09/gan-5-ty-usd-tu-asean-rot-vao-dong-nai-singapore-dan-dau.jpg",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 414 },
    items: 3,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 414, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30,
  },
}

const RightArrow = styled.div`
  position: absolute;
  top: 80px;
  right: 10px;
`;

const LeftArrow = styled.div`
  position: absolute;
  top: 80px;
  left: 20px;
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
  )
}

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
  )
}

const Category = props => {
  return (
    <div className="location">
      <div className="title">{props.title}</div>
      <BrowserView>
        <div className="location-row" >
          {LOCATIONS.map(item => (
            <a
              key={item.type}
              className="item-col"
              style={{ backgroundImage: `url(${item.img})` }}
              href={`/category/bat-dong-san/${item.type}`}
              as={`/category/bat-dong-san/${item.type}`}
            >
              <span className="item-name">{item.name}</span>
            </a>
          ))}
        </div>
      </BrowserView>
      <MobileView>
        <Carousel
          responsive={responsive}
          arrows
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {LOCATIONS.map((item, i) => (
            <a
              key={item.type}
              href={`/category/bat-dong-san/${item.type}`}
              as={`/category/bat-dong-san/${item.type}`}
            >
              <div className="location-item-mobile">
                <img className="img-cover" src={item.img} />
                <span className="item-name">{item.name}</span>
              </div>
            </a>
          ))}
        </Carousel>
      </MobileView>
      <style jsx>{styles}</style>
    </div>
  );
};

Category.propTypes = {};

export default Category;

const styles = css`
  .title {
    margin-bottom: 13px;
    font-size: 22px;
    font-weight: 700;
  }

  .location-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  .item-col {
    position: relative;
    border-radius: 3px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;
    width: 100%;
  }

  .location-item-mobile {
    margin: 0 10px;
  }

  .img-cover {
    height: 200px;
    width: 100%;
    margin: 0 5px;
    object-fit: cover;
    border-radius: 5px;
  }

  .item-name {
    position: absolute;
    z-index: 10;
    font-size: 25px;
    font-weight: 900;
    color: #fff;
    bottom: 20px;
    margin-left: 20px;
  }

  @media only screen and (max-width: 1024px) {
    .location {
      margin-left: -10px;
    }

    .title {
      margin-left: 15px;
      font-size: 22px;
      font-weight: 700;
    }
    .location-row {
      display: none;
    }
  }
`;
