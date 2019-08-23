import React from 'react'
import css from 'styled-jsx/css'
import Head from 'next/head'

import { makeGetRequest } from '../utils/makeRequest'
import { SearchProvider } from '../components/searchComponent/searchContext'
import Layout from '../components/layout'
import Search from '../components/searchComponent'
import { searchUrl } from '../constants/router'

const Category = props => {
  return (
    <Layout>
      <Head>
        <meta name="title" content={`title`} />
        <meta name="og:image" src={`seoImage`} />
      </Head>
      <SearchProvider>
        <Search {...props} />
      </SearchProvider>
    </Layout>
  )
}

// get news data by id from server
Category.getInitialProps = async ({ res, req }) => {
  const {
    params: {
      type,
      location,
    } = {},
    protocol,
  } = req
  const url = `${protocol}://${req.get("Host")}${searchUrl}`
  const { data } = await makeGetRequest(url, { type, location })
  return { data, type, location }
};

export default Category;
