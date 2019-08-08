import React from 'react'
import { any } from 'prop-types'
import css from 'styled-jsx/css'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

import { googleMapKey } from '../../config'
import locationIcon from '../../assets/images/home-location.svg'
import SchollLocationIcon from '../../assets/images/school-location.svg'
import HospitalLocationIcon from '../../assets/images/hospital-location.svg'

const LOCATION_ICON = {
  hospital: HospitalLocationIcon,
  school: SchollLocationIcon,
}

const Location = styled.img`
  position: relative;
  height: 30px;
  top: -20px;
  left: -15px;
`

const Place = styled.div`
  img {
    position: relative;
    height: 25px;
    top: -23px;
    left: -13px;
  }
`

const PageMap = props => {
  const {
    nearPlaces = [],
    location: {
      lat,
      lng,
    } = {},
  } = props

  const center = { lat, lng }
  const defaultZoom = 14
  const options = {
    fullscreenControl: false,
    zoomControl: false,
  }

  const apiLoaded = (map, maps) => {
    const circlePolygon = new google.maps.Circle({
      strokeColor: '#ffbb96',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#ffbb96',
      fillOpacity: 0.35,
      map: map,
      center: center,
      radius: 1500,
    });
    circlePolygon.setMap(map)
  }

  return (
    <div>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: googleMapKey,
            language: 'vi',
            libraries: ['places'],
          }}
          center={center}
          defaultZoom={defaultZoom}
          options={options}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiLoaded(map, maps)}
        >
          <Location lat={lat} lng={lng} src={locationIcon} />
          {nearPlaces.map((item, i) => <Place key={i} {...item} className="place">
            <div className="place">
              <div className="place-info">{item.name}</div>
              <img src={LOCATION_ICON[item.type]} />
            </div>
          </Place>)}
        </GoogleMapReact>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

PageMap.propTypes = {
}

export default PageMap

const styles = css`
  .map {
    width: 100%;
    height: 500px;
  }

  .place-info {
    position: absolute;
    padding-top: 10px;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    width: 200px;
    height: 40px;
    top: -70px;
    left: -100px;
    background-color: #fff;
    display: none;
    border-radius: 2px;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14);
  }

  .place:hover .place-info {
    display: block;
  }
`;
