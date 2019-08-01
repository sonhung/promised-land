import React, { Component } from "react";
import { any } from "prop-types";

import { makeGetRequest } from "../utils/makeRequest";
import { getNewsUrl } from "../constants/router";

const NewsContext = React.createContext();

class NewsProvider extends Component {
  state = {
    topNews: [],
    hotNews: []
  };

  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    const [
      { data: hotNews = [] } = {},
      { data: topNews = [] } = {}
    ] = await Promise.all([
      makeGetRequest(getNewsUrl, { type: " hot-news" }),
      makeGetRequest(getNewsUrl, { type: " top-news" })
    ]);
    this.setState({ topNews, hotNews });
  };

  render() {
    return (
      <NewsContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </NewsContext.Provider>
    );
  }
}

NewsProvider.propTypes = {
  children: any
};

const NewsConsumer = NewsContext.Consumer;

export default NewsContext;
export { NewsConsumer, NewsProvider };
