import React from "react";
import css from "styled-jsx/css";

import { NewsProvider, NewsConsumer } from "../components/newsContext";
import Layout from "../components/layout";
import Category from "../components/category";
import Slider from "../components/slider";
import Advertisement from '../components/advertisement'

const Index = () => {
  return (
    <Layout>
      <NewsProvider>
        <NewsConsumer>
          {({ state }) => (
            <div>
              <div className="category">
                <Category />
              </div>
              <div className="asection">
                <Advertisement title="Dự án mới" />
              </div>
              <div className="section">
                <Slider title="Tin nổi bật" data={state.topNews} />
              </div>
              <div className="section">
                <Slider title="Tin mới cập nhật" data={state.hotNews} />
              </div>
            </div>
          )}
        </NewsConsumer>
      </NewsProvider>
      <style jsx>{styles}</style>
    </Layout>
  );
};

export default Index;

const styles = css`
  .category {
    margin: 20px 0;
  }

  .section {
    margin: 70px -5px;
  }

  @media only screen and (max-width: 767px) {
    .section {
      margin: 40px -5px;
    }
  }
`;
