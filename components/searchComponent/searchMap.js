/* global google */
import React, { useState } from 'react'
import { array, object } from 'prop-types'
import css from 'styled-jsx/css'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import { Row, Col, Icon, Tag } from 'antd'

import { googleMapKey } from '../../config'
import { randomTagColor } from '../../utils'
import locationIcon from '../../assets/images/home-location.svg'

const TAGS = [
  {
    value: 'Tp. Hồ Chí Minh',
    link: 'https://www.google.com/',
  },
  {
    value: 'Nhà đất',
    link: 'https://www.google.com/',
  },
  {
    value: 'Chung cư',
    link: 'https://www.google.com/',
  },
  {
    value: 'Quận 10',
    link: 'https://www.google.com/',
  },
  {
    value: 'Sư Vạn Hạnh',
    link: 'https://www.google.com/',
  },
  {
    value: 'Tin mới',
    link: 'https://www.google.com/',
  },
  {
    value: 'Dự án mới',
    link: 'https://www.google.com/',
  },
  {
    value: 'Nhà trọ',
    link: 'https://www.google.com/',
  },
]

const Location = styled.img`
  position: relative;
  height: 30px;
  top: -20px;
  left: -15px;
`

const SearchMap = props => {
  const {
    lat = 10.7705121,
    lng = 106.66952609999998,
    data = [],
  } = props

  const tags = TAGS

  const center = { lat: parseFloat(lat), lng: parseFloat(lng) }
  const defaultZoom = 13.8
  const options = {
    fullscreenControl: false,
    zoomControl: false,
    clickableIcons: false,
  }

  const apiLoaded = (map, maps) => {
    const circlePolygon = new google.maps.Circle({
      strokeColor: "#ffbb96",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#ffbb96",
      fillOpacity: 0.35,
      map: map,
      center: center,
      radius: 2000,
    });
    circlePolygon.setMap(map)
  }

  return (
    <div>
      <Row>
        <Col md={13} lg={15}>
          <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: googleMapKey,
                language: "vi",
                libraries: ["places"],
              }}
              center={center}
              defaultZoom={defaultZoom}
              options={options}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => apiLoaded(map, maps)}
            >
              {data.map((item, i) => <Location
                key={i}
                lat={item.location.lat}
                lng={item.location.lng}
                src={locationIcon} />
              )}
            </GoogleMapReact>
          </div>
        </Col>
        <Col md={11} lg={9}>
          <div className="summary">
            <div className="location">
              <Icon
                type="environment"
                style={{ color: "#ff4d4f", fontSize: "20px", marginRight: '10px' }}
              />
              <span>{`Van Hanh Mall, Sư Vạn Hạnh, District 10, Ho Chi Minh City`}</span>
            </div>
            <div className="row-item">
              <Icon type="bank" />
              <label>Tổng bất động sản (bán kính 2km): </label>
              <span>15</span>
            </div>
            <div className="row-item">
              <Icon type="dollar" />
              <label>Giá: </label>
              <span>1.300.000.000đ - 7.000.000.000đ</span>
            </div>
            <div className="row-item">
              <Icon type="stock" />
              <label>Giá trung bình: </label>
              <span>125.000.000đ/m<sup>2</sup></span>
            </div>
            <div className="row-item">
              <Icon type="scan" />
              <label>Diện tích: </label>
              <span>75m<sup>2</sup> - 200m<sup>2</sup></span>
            </div>
            <div className="tag">
              {tags.map((item, i) => <a href={item.link} target="_blank" key={i}>
                <Tag color={randomTagColor()}>{item.value}</Tag>
              </a>)}
            </div>
          </div>
        </Col>
      </Row>
      <style jsx>{styles}</style>
    </div>
  )
}

SearchMap.propTypes = {
  nearPlaces: array,
  location: object,
}

export default SearchMap;

const styles = css`
  .map {
    width: 100%;
    height: 400px;
  }

  .summary {
    margin-left: 20px;
    padding: 15px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    height: 400px;
    overflow-y: auto;
  }

  .location {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
    color: #ff4d4f;
  }

  .row-item {
    margin: 7px 0;
    font-size: 16px;
    font-weight: 400;
  }

  .row-item :global(span) {
    font-weight: 600;
  }

  .row-item :global(i) {
    font-size: 18px;
    margin-right: 10px;
    color: rgba(0,0,0,.25);
  }

  sup {
    position: relative;
    top: -3px;
  }

  .tag {
    margin-top: 20px;
  }

  .tag :global(div) {
    cursor: pointer;
    margin: 0 10px 10px 0;
  }

  @media only screen and (max-width: 767px) {
    .summary {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`
