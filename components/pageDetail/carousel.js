import React, { useState } from 'react'
import css from 'styled-jsx/css'
import { isEmpty } from 'lodash'
import styled from 'styled-components'
import { Row, Col, Icon } from 'antd'
import disableScroll from 'disable-scroll'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Img = styled.img`
  object-fit: cover;
  height: ${props => props.large ? '442px' : '220px'};
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  transform: scale(1) !important;
  transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s !important;
  &:hover {
    transform: scale(1.05) !important;
    filter: brightness(120%);
    transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s !important;
  }
`

const ImageContainer = styled.div`
  overflow: hidden;
  border: 1px solid #000;
`

const Image = data => (
  <ImageContainer>
    <Img {...data} />
  </ImageContainer>
)

const Carousel = props => {
  const { data = [] } = props
  if (isEmpty(data)) return null

  const [showGallery, setShowGallery] = useState(false)

  const viewGallery = () => {
    setShowGallery(true)
    disableScroll.on()
  }

  return (
    <div>
      <div className="carousel">
        <Row>
          <Col md={12}>
            <Image src={data[0]} large onClick={viewGallery}/>
          </Col>
          <Col md={12}>
            <Row>
              <Col md={12}><Image src={data[1]} onClick={viewGallery} /></Col>
              <Col md={12}><Image src={data[2]} onClick={viewGallery} /></Col>
            </Row>
            <Row>
              <Col md={12}><Image src={data[3]} onClick={viewGallery} /></Col>
              <Col md={12}><Image src={data[4]} onClick={viewGallery} /></Col>
            </Row>
          </Col>
        </Row>
      </div>
      {showGallery && <div className="modal">
        <span className="close" onClick={() => { setShowGallery(false); disableScroll.off() }}>
          <Icon type="close" style={{ color: '#fff', fontSize: '30px' }} />
        </span>
        <div className="gallery">

        </div>
      </div>}
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
    opacity: 0.9;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 27px;
    cursor: pointer;
  }
`;
