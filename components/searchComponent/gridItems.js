import React from "react";
import css from "styled-jsx/css";
import { array } from "prop-types";

import Card from "../card";

const GridItems = props => {
  const { data = [] } = props;

  return (
    <div>
      <div className="row-items">
        {data.map((item, i) => (
          <div className="col-item" key={i}>
            <Card {...item} />
          </div>
        ))}
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

GridItems.propTypes = {
  data: array
};

export default GridItems;

const styles = css`
  .row-items {
    flex-wrap: wrap;
    box-sizing: border-box;
    display: flex;
    margin: 0 -15px;
  }

  .col-item {
    padding: 15px;
    flex-basis: 20%;
    max-width: 20%;
  }

  @media (max-width: 1200px) {
    .col-item {
      flex-basis: 25%;
      max-width: 25%;
    }
  }

  @media (max-width: 991px) {
    .col-item {
      flex-basis: 33.33%;
      max-width: 33.33%;
    }
  }

  @media (max-width: 767px) {
    .col-item {
      flex-basis: 50%;
      max-width: 50%;
    }
  }
`;
