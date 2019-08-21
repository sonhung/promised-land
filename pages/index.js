import React from 'react'
import css from 'styled-jsx/css'

import { NewsProvider, NewsConsumer } from '../components/newsContext'
import Layout from '../components/layout'
import HouseType from '../components/houseType'
import Locations  from '../components/locations'
import Slider from '../components/slider'
import Advertisement from '../components/advertisement'

const isWindow = typeof window !== 'undefined'

const Index = () => {
  return (
    <Layout>
      <NewsProvider>
        <NewsConsumer>
          {({ state }) => (
            <div>
              {isWindow && (
                <div>
                  <div className="category">
                    <HouseType />
                  </div>
                  <div className="section">
                    <Advertisement title="Dự án mới" type="image" />
                  </div>
                  <div className="section">
                    <Locations />
                  </div>
                  <div className="section">
                    <Slider title="Tin nổi bật" data={state.topNews} />
                  </div>
                  <div className="section">
                    <Slider title="Tin mới cập nhật" data={state.hotNews} />
                  </div>
                </div>
              )}
            </div>
          )}
        </NewsConsumer>
      </NewsProvider>
      <style jsx>{styles}</style>
    </Layout>
  )
}

export default Index

const styles = css`
  .category {
    margin: 20px 0 -20px 0;
  }

  .section {
    margin: 70px -5px;
  }

  @media only screen and (max-width: 767px) {
    .section {
      margin: 40px -5px;
    }
  }
`
