import React from 'react'
import css from 'styled-jsx/css'
import Head from 'next/head'

import { makeGetRequest } from '../utils/makeRequest'
import { SearchProvider } from '../components/searchComponent/searchContext'
import Layout from '../components/layout'
import { searchUrl } from '../constants/router'
import SearchBlock from '../components/searchComponent/searchBlock'
import SearchMap from '../components/searchComponent/searchMap'
import GridItems from '../components/searchComponent/gridItems'

const SearchPage = props => {
  return (
    <Layout>
      <Head>
        <meta name="title" content={`title`} />
        <meta name="og:image" src={`seoImage`} />
      </Head>
      <SearchProvider >
        <div className="search">
          <SearchBlock />
        </div>
        <div className="map">
          <SearchMap {...props} />
        </div>

        <div className="news">
          <GridItems {...props} />
        </div>
      </SearchProvider>
      <style jsx>{styles}</style>
    </Layout>
  )
}

const styles = css`
  .search {
    margin-bottom: 30px;
  }

  .news {
    margin-top: 20px;
  }
`

// get news data by query data from server
SearchPage.getInitialProps = async ({ res, req }) => {
  const {
    query: {
      lat,
      lng,
    } = {},
    protocol,
  } = req
  const url = `${protocol}://${req.get("Host")}${searchUrl}`
  const { data } = await makeGetRequest(url, { lat, lng })
  return { data, lat, lng }
};

export default SearchPage
