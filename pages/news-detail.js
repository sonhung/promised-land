import React from 'react'
import css from 'styled-jsx/css'
import Head from 'next/head'
import { isEmpty } from 'lodash'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { makeGetRequest } from '../utils/makeRequest'
import { getNewsDetailUrl } from '../constants/router'
// import { NewsProvider } from '../components/newsContext'
import Layout from '../components/layout'
import Carousel from '../components/carousel'

const NewsDetail = props => {
  const {
    data: {
      img = '',
      title = '',
      images = [],
    } = {},
  } = props

  return (
    <Layout>
      <Head>
        <meta name="title" content={title} />
        <meta name="og:image" src={img} />
      </Head>
      {!isEmpty(images) && <div className="carousel">
        <Carousel data={images} />
      </div>
      }
      {/* <NewsProvider>
      </NewsProvider> */}
      <style jsx>{styles}</style>
    </Layout>
  );
};

// get news data by id from server
NewsDetail.getInitialProps = async ({ res, req }) => {
  const {
    params: { id } = {},
    protocol,
  } = req
  const url = `${protocol}://${req.get('Host')}${getNewsDetailUrl}/${id}`
  const { data } = await makeGetRequest(url)
  return { data }
}

export default NewsDetail;

const styles = css`
`;
