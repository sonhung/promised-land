import React from 'react'
import css from 'styled-jsx/css'
import { Pagination } from 'antd'
import { isMobileOnly } from 'react-device-detect'

import SearchBlock from './searchBlock'
import Ads from '../advertisement'
import GridItems from './gridItems'
import { SEARCH_TYPE } from '../../constants'

const isWindow = typeof window !== 'undefined'

const Index = props => {
  const { data, type } = props
  const title = SEARCH_TYPE[type] || 'Tin nổi bật'
  const choosePage = page => {
    console.log('page here', page)
  }

  return (
    <div>
      <div className="search">
        <SearchBlock />
      </div>
      <div className="ads">
        <Ads type="text"/>
      </div>
      <div className="title">{title}</div>
      <GridItems data={data} />
      <div className="pagination">
        {isWindow && <Pagination
          defaultCurrent={6}
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

export default Index

const styles = css`
  .search {
    margin: 10px 0 30px;
  }

  .ads {
    margin: 30px -5px;
  }

  .title {
    font-weight: 700;
    font-size: 22px;
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
`
