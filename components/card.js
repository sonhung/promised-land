import React from "react"
import css from "styled-jsx/css"
import Link from 'next/link'

const CardComponent = props => {
  const { image, type, name, aerea, price, address, id } = props;
  return (
    <div className="card">
      <Link
        href={`/news-detail?${id}`}
        as={`/news-detail/${id}`}
      >
        <div>
          <img src={image} className="card-img" />
          <div className="info">
            {type && <div className="type">{type}</div>}
            {name && <div className="name">{name}</div>}
            {aerea && (
              <div>
                Diện tích: {aerea} m<sup>2</sup>
              </div>
            )}
            {price && <div className="price">{price}</div>}
            {address && <div className="address">{address}</div>}
          </div>
        </div>
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
