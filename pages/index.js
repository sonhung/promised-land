import React from "react";
import css from "styled-jsx/css";

import { NewsProvider, NewsConsumer } from "../components/newsContext";
import Layout from "../components/layout";
import Category from "../components/category";
import Slider from "../components/slider";

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
              <div className="top-news">
                <Slider title="Tin nổi bật" data={state.topNews} />
              </div>
              <div className="hot-news">
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
    margin: 10px 0;
  }

  .top-news {
    margin: 20px -5px;
  }

  .hot-news {
    margin: 20px -5px;
  }
`;
