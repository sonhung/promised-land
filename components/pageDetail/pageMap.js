/* global google */
import React, { useState } from "react";
import { array, object } from "prop-types";
import css from "styled-jsx/css";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { Button, Tag } from "antd";
import { filter, isEmpty } from "lodash";

import { googleMapKey } from "../../config";
import { PLACES_TYPE } from "../../constants";
import locationIcon from "../../assets/images/home-location.svg";
import SchollLocationIcon from "../../assets/images/school-location.svg";
import HospitalLocationIcon from "../../assets/images/hospital-location.svg";

const LOCATION_ICON = {
  hospital: HospitalLocationIcon,
  school: SchollLocationIcon,
};

const Location = styled.img`
  position: relative;
  height: 30px;
  top: -20px;
  left: -15px;
`;

const Place = styled.div`
  img {
    position: relative;
    height: 25px;
    top: -23px;
    left: -13px;
  }
`;

const PageMap = props => {
  const { nearPlaces = [], location: { lat, lng } = {} } = props;
  const defaultPlaces = filter(nearPlaces, item => item.type === "school");
  const [placesShow, setPlacesShow] = useState(defaultPlaces);
  const [activeType, setActiveType] = useState("school");

  const center = { lat, lng }
  const defaultZoom = 14
  const options = {
    fullscreenControl: false,
    zoomControl: false,
    clickableIcons: false,
  };

  const apiLoaded = (map, maps) => {
    const circlePolygon = new google.maps.Circle({
      strokeColor: "#ffbb96",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#ffbb96",
      fillOpacity: 0.35,
      map: map,
      center: center,
      radius: 1200,
    });
    circlePolygon.setMap(map);
  };

  const chooseType = type => {
    const places = filter(nearPlaces, item => item.type === type);
    setPlacesShow(places);
    setActiveType(type);
  };

  return (
    <div>
      <div className="title">Tiện ích xung quanh</div>
      <div className="tag-place">
        {PLACES_TYPE.map((item, i) => (
          <span
            key={i}
            className={`${item.type === activeType ? "place-active" : ""}`}
          >
            <Button onClick={() => chooseType(item.type)}>{item.text}</Button>
          </span>
        ))}
        <div className="places-box">
          {placesShow.map((item, i) => (
            <div className="place-item" key={i}>
              <Tag color="#2db7f5">{i + 1}</Tag>
              {item.name}
            </div>
          ))}
          {isEmpty(placesShow) && (
            <div className="no-place">
              Không có địa điểm nào trong bán kính 2km
            </div>
          )}
        </div>
      </div>
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
          <Location lat={lat} lng={lng} src={locationIcon} />
          {nearPlaces.map((item, i) => (
            <Place key={i} {...item} className="place">
              <div className="place">
                <div className="place-info">{item.name}</div>
                <img src={LOCATION_ICON[item.type]} />
              </div>
            </Place>
          ))}
        </GoogleMapReact>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

PageMap.propTypes = {
  nearPlaces: array,
  location: object,
};

export default PageMap;

const styles = css`
  .map {
    width: 100%;
    height: 370px;
  }

  .title {
    font-size: 22px;
    font-weight: 500;
    margin-top: 30px;
  }

  .tag-place {
    margin: 15px -5px;
  }

  .tag-place :global(button) {
    margin: 0 5px 10px;
    color: #ff4d4f;
    background-color: #fff;
    border-color: #ff4d4f;
    border-radius: 15px;
  }

  .tag-place :global(button:hover) {
    background-color: #ff4d4f;
    border-color: #ff4d4f;
    color: #fff;
  }

  .place-active :global(button) {
    background-color: #ff4d4f;
    border-color: #ff4d4f;
    color: #fff;
  }

  .places-box {
    margin: 0 5px;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    min-height: 60px;
  }

  .place-item {
    display: inline-flex;
    margin: 5px 10px;
  }

  .no-place {
    min-height: 60px;
    padding-top: 15px;
    text-align: center;
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
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.2), 0px 5px 22px rgba(0, 0, 0, 0.12),
      0px 12px 17px rgba(0, 0, 0, 0.14);
  }

  .place:hover .place-info {
    display: block;
  }
`;
