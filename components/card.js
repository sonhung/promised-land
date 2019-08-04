import React from "react"
import css from "styled-jsx/css"
import Link from 'next/link'

import { DEFAULT_IMAGE, HOUSE_TYPE } from '../constants'
import { formatPrice } from '../utils'
const CardComponent = props => {
  const {
    photos = [],
    _id,
    title,
    price,
    raw_address,
    prop_type,
    area
  } = props
  const image = photos[0] || DEFAULT_IMAGE
  return (
    <div className="card">
      <Link
        href={`/news-detail?${_id}`}
        as={`/news-detail/${_id}`}
      >
        <a target="_blank" className="open-new-tab">
          <img src={image} className="card-img" />
          <div className="info">
            {prop_type && <div className="type">{HOUSE_TYPE[prop_type]}</div>}
            {title && <div className="name">{title}</div>}
            {area && (
              <div>
                Diện tích: {area} m<sup>2</sup>
              </div>
            )}
            {price && <div className="price">{formatPrice(price)}đ</div>}
            {raw_address && <div className="address">{raw_address}</div>}
          </div>
        </a>
      </Link>
      <style jsx>{styles}</style>
    </div>
  );
};

export default CardComponent;

const styles = css`
  .card {
    height: 100%;
  }

  .open-new-tab {
    color: #222;
  }

  .info :global(div) {
    margin: 5px 0;
  }

  .card-img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 3px;
  }

  .info {
    padding: 5px 0;
  }

  .type {
    color: #888;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    display: -webkit-box;
    max-height: 52px;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
  .price {
    font-size: 15px;
    font-weight: 700;
    color: #ff4d4f;
  }

  .address {
    display: -webkit-box;
    max-height: 52px;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }

  sup {
    position: relative;
    top: -3px;
  }
  @media only screen and (max-width: 576px) {
    .card-img {
      height: 103px;
    }
  }
`;
