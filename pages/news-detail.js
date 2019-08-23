import React from "react";
import css from "styled-jsx/css";
import Head from "next/head";
import { isEmpty } from "lodash";
import { object } from "prop-types";

import { makeGetRequest } from "../utils/makeRequest";
import { getNewsDetailUrl } from "../constants/router";
import Layout from "../components/layout";
import Carousel from "../components/pageDetail/carousel";
import PageContent from "../components/pageDetail/pageContent";

import { DEFAULT_IMAGE } from "../constants";

const NewsDetail = props => {
  const { data: { title = "", photos = [] } = {}, data = {} } = props;

  const seoImage = photos[0] || DEFAULT_IMAGE;

  return (
    <Layout>
      <Head>
        <meta name="title" content={title} />
        <meta name="og:image" src={seoImage} />
      </Head>
      {!isEmpty(photos) && (
        <div className="carousel">
          <Carousel data={photos} />
        </div>
      )}
      <div className="content">
        <PageContent {...data} />
      </div>
      <style jsx>{styles}</style>
    </Layout>
  );
};

// get news data by id from server
NewsDetail.getInitialProps = async ({ res, req }) => {
  const { params: { id } = {}, protocol } = req;
  const url = `${protocol}://${req.get("Host")}${getNewsDetailUrl}/${id}`;
  const { data } = await makeGetRequest(url);
  return { data };
};

NewsDetail.propTypes = {
  data: object,
};

export default NewsDetail;

const styles = css`
  .carousel {
    margin-top: 7px;
  }

  .content {
    margin: 57px 90px;
  }

  @media only screen and (max-width: 1024px) {
    .content {
      margin: 37px 10px;
    }
  }
`;
