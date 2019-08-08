import React from 'react'
import css from 'styled-jsx/css'
import { Pagination } from 'antd'
import { isMobileOnly } from 'react-device-detect'

import GridItems from './gridItems'

const isWindow = typeof window !== 'undefined'

const Index = props => {
  const { data } = props

  const choosePage = page => {
    console.log('page here', page)
  }

  return (
    <div>
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
