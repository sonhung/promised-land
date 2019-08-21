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
                  <div className="ads">
                    <Advertisement type="image" />
                  </div>
                  <div className="location">
                    <Locations title="Điểm nóng giao dịch" />
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
    margin: 0 -5px 50px;
  }

  .ads {
    margin: 0 -10px;
  }

  .location {
    margin: 60px -5px 80px -5px;
  }

  .section {
    margin: 50px -10px;
  }

  @media only screen and (max-width: 767px) {
    .section {
      margin: 40px -10px;
    }
  }
`
