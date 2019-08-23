import React, { Component } from 'react'
import { any } from 'prop-types'

const SearchContext = React.createContext()

class SearchProvider extends Component {
  state = {}

  getNews = (page, query, cbFunc) => {
    console.log({ page, query })
    cbFunc([])
  }

  render() {
    return (
      <SearchContext.Provider
        value={{
          state: this.state,
          getNews: this.getNews,
        }}
      >
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

SearchProvider.propTypes = {
  children: any,
}

const SearchConsumer = SearchContext.Consumer

export default SearchContext
export { SearchConsumer, SearchProvider }
