import React from 'react'
import css from 'styled-jsx/css'

import SearchBlock from './searchBlock'
import Ads from '../advertisement'
import GridItems from './gridItems'
import { SEARCH_TYPE } from '../../constants'

const Index = props => {
  const { data, type, location } = props
  const title = SEARCH_TYPE[type] || 'Tin nổi bật'

  const choosePage = page => {
    console.log('page here', page)
  }

  return (
    <div>
      <div className="search">
        <SearchBlock type={type} location={location} />
      </div>
      <div className="ads">
        <Ads type="text" />
      </div>
      <div className="title">{title}</div>
      <GridItems data={data} choosePage={choosePage} />
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
`
