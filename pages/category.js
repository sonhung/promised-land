import React from 'react'
import css from 'styled-jsx/css'
import Head from 'next/head'

import { makeGetRequest } from '../utils/makeRequest'
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
      <Search {...props} />
    </Layout>
  )
}

// get news data by id from server
Category.getInitialProps = async ({ res, req }) => {
  console.log('douma')
  const {
    params: {
      type,
    } = {},
    protocol,
  } = req
  const url = `${protocol}://${req.get("Host")}${searchUrl}`
  const { data } = await makeGetRequest(url, { type })
  return { data, type }
};

export default Category;
