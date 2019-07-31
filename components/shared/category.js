import React from 'react'
import { any } from 'prop-types'
import { BrowserView, MobileView } from "react-device-detect";
import css from 'styled-jsx/css'
import { Row, Col } from 'antd'
import dynamic from 'next/dynamic'

import 'react-multi-carousel/lib/styles.css'
const Carousel = dynamic(import('react-multi-carousel'), {
  ssr: false
})

const CATEGORIES = [
  {
    type: 1,
    name: 'Căn hộ',
    img: 'https://cdn.tuoitre.vn/thumb_w/586/2019/3/30/photo-1-15539554037881852505636.jpg'
  },
  {
    type: 2,
    name: 'Biệt thự',
    img: 'https://neohouse.vn/wp-content/uploads/2017/02/bia-biet-thu-ca-dien-btc01.jpg'
  },
  {
    type: 3,
    name: 'Nhà đất',
    img: 'https://nhadat24h.com/uploads/bds/201512/30/80987_141743_nha--quan-12_.jpg'
  },
  {
    type: 4,
    name: 'Phòng trọ',
    img: 'https://qd4zxf8cdsvo9oem-zippykid.netdna-ssl.com/wp-content/uploads/2018/07/large-7D5-81F691.png'
  }
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 414 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 414, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
}

const Category = props => {
  return (
    <div className="category">
      <BrowserView>
        <Row gutter={16}>
          {CATEGORIES.map(item => (<Col
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            key={item.type}
          >
            <div className="category-item">
              <img src={item.img} className="category-img" />
              <div className="title">{item.name}</div>
            </div>
          </Col>))}
        </Row>
      </BrowserView>
      <MobileView>
        <Carousel
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
          arrows={false}
        >
          {CATEGORIES.map((item, i) => (<div key={item.type}>
            <div className={`category-item ${i < 3 ? 'mg-r-20' : ''}`}>
              <img src={item.img} className="category-img" />
              <div className="title">{item.name}</div>
            </div>
          </div>))}
        </Carousel>
      </MobileView>
      <style jsx>{styles}</style>
    </div>
  )
}

Category.propTypes = {
}

export default Category

const styles = css`
  .category-item {
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.06);
    border: 1px solid rgba(0,0,0,.1);
    background-color: #fff;
    margin-bottom: 17px;
    display: flex;
    align-items: center;
  }

  .mg-r-20 {
    margin-right: 20px;
  }

  .category-img {
    object-fit: cover;
    height: 94px;
    width: 128px;
  }

  .title {
    font-size: 22px;
    color: #222;
    font-weight: 700;
    padding-left: 20px;
  }
`