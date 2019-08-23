import React, { useState, useContext } from 'react'
import css from 'styled-jsx/css'
import { array } from 'prop-types'
import { Pagination } from 'antd'
import { isMobileOnly } from 'react-device-detect'
import { pick } from 'lodash'

import Card from '../card'
import SearchContext from './searchContext'

const isWindow = typeof window !== 'undefined'

const GridItems = props => {
  const {
    data = [],
  } = props

  const {
    newsData,
    getNews,
  } = useContext(SearchContext)

  const [showData, setShowData] = useState(data)
  const query = pick(props, ['location', 'type', 'lat', 'lng'])

  const choosePage = page => {
    getNews(page, query, (data) => setShowData(data))
  }

  return (
    <div>
      <div className="row-items">
        {showData.map((item, i) => (
          <div className="col-item" key={i}>
            <Card {...item} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {isWindow && <Pagination
          defaultCurrent={1}
          total={30000}
          defaultPageSize={20}
          size={`${isMobileOnly ? 'small' : ''}`}
          onChange={(page) => choosePage(page)}
        />}
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

GridItems.propTypes = {
  data: array,
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

  .pagination {
    text-align: center;
  }

  .pagination :global(li:hover) {
    border-color: #ff4d4f;
  }

  .pagination :global(li:hover > a) {
    color: #ff4d4f;
    border-color: #ff4d4f;
  }

  .pagination :global(li:focus > a) {
    color: #ff4d4f;
    border-color: #ff4d4f;
  }

  .pagination :global(.ant-pagination-item-active) {
    border-color: #ff4d4f;
  }

  .pagination :global(.ant-pagination-item-active > a) {
    color: #ff4d4f;
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
