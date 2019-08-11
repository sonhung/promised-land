import React, { useState } from 'react'
import { any } from 'prop-types'
import css from 'styled-jsx/css'
import styled from "styled-components"
import Select from 'react-select'
import { Popover, Button, Slider, Row, Col } from 'antd'

import { provinces, districts } from '../../constants/administrativeUnit'
import { TYPE } from '../../constants'
import { formatPrice } from '../../utils'

const maxPrice = 30000000000
const maxArea = 500

const PopoverContainer = styled.div`
  width: 300px;
  height: 150px;
  button {
    margin-top: 25px;
    background-color: #ff4d4f;
    color: #fff;
    outline: none;
    border: 1px solid #ff4d4f;
  }
`

const PopoverRange = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #ff4d4f;
  margin-bottom: 25px;
`

const priceMark = {
  0: {
    style: {
      marginLeft: '35px',
      color: '#222'
    },
    label: 'Giá tối thiểu'
  },
  30000000000: {
    style: {
      color: '#222',
      left: 'none',
      right: '0',
      transform: 'none'
    },
    label: 'Giá tối đa'
  }
}

const areaMark = {
  0: {
    style: {
      marginLeft: '53px',
      color: '#222'
    },
    label: 'Diện tích tối thiểu'
  },
  500: {
    style: {
      color: '#222',
      left: 'none',
      right: '0',
      transform: 'none'
    },
    label: 'Diện tích tối đa'
  }
}

const Search = props => {
  const [province, setProvince] = useState()
  const [district, setDistrict] = useState()
  const [districtsShow, setDistrictsShow] = useState([])
  const [houseType, setHouseType] = useState()
  //for price
  const [priceConfig, setPriceConfig] = useState([0, maxPrice])
  const [priceStep, setPriceStep] = useState(100000000)
  const [priceVisible, setPriceVisible] = useState(false)

  //for area
  const [areaConfig, setAreaConfig] = useState([0, maxArea])
  const [areaStep, setAreaStep] = useState(5)
  const [areaVisible, setAreaVisible] = useState(false)

  const chooseProvince = data => {
    setProvince(data)
    setDistrictsShow(districts[data.type])
    if (data !== province) setDistrict(null)
  }

  const chooseDistrict = data => {
    setDistrict(data)
    console.log(`Option selected:`, data)
  }

  const chooseHouseType = data => {
    setHouseType(data)
  }


  //for price
  const changePrice = value => {
    if (value[0] > 7000000000) setPriceStep(500000000)
    if (value[0] <= 7000000000) setPriceStep(100000000)
    setPriceConfig(value)
  }

  const fillterPrice = () => {
    setPriceVisible(false)
  }

  //for area
  const changeArea = value => {
    if (value[0] > 200) setAreaStep(50)
    if (value[0] <= 200) setAreaStep(5)
    setAreaConfig(value)
  }

  const fillterArea = () => {
    setAreaVisible(false)
  }

  const pricePopover = (
    <PopoverContainer>
      <PopoverRange>
        {`${formatPrice(priceConfig[0])}đ - ${formatPrice(priceConfig[1])}đ`}
        {`${priceConfig[1] === maxPrice ? '+' : ''}`}
      </PopoverRange>
      <Slider
        tooltipVisible={false}
        range
        min={0}
        max={maxPrice}
        step={priceStep}
        defaultValue={priceConfig}
        marks={priceMark}
        onChange={changePrice}
      />
      <Button block type="danger" onClick={fillterPrice}>Áp dụng</Button>
    </PopoverContainer>
  )

  const areaPopover = (
    <PopoverContainer>
      <PopoverRange>
        {areaConfig[0]}<span>m2 - </span>
        {areaConfig[1]}<span>m2</span>
        {`${areaConfig[1] === maxArea ? '+' : ''}`}
      </PopoverRange>
      <Slider
        tooltipVisible={false}
        range
        min={0}
        max={maxArea}
        step={areaStep}
        defaultValue={areaConfig}
        marks={areaMark}
        onChange={changeArea}
      />
      <Button block type="danger" onClick={fillterArea}>Áp dụng</Button>
    </PopoverContainer>
  )

  return (
    <div className="search">
      <Row>
        <Col lg={7} xs={24}>
          <div className="filed">
            <Select
              placeholder="Tất cả loại bất động sản"
              value={houseType}
              onChange={chooseHouseType}
              options={TYPE}
            />
          </div>
        </Col>
        <Col lg={4} xs={12}>
          <div className="filed">
            <Select
              placeholder="Tỉnh/Thành"
              value={province}
              onChange={chooseProvince}
              options={provinces}
            />
          </div></Col>
        <Col lg={5} xs={12}>
          <div className="filed">
            <Select
              placeholder="Quận/Huyện"
              value={district}
              onChange={chooseDistrict}
              options={districtsShow}
            />
          </div>
        </Col>
        <Col lg={4} xs={12}>
          <div className="filed">
            <Popover
              visible={priceVisible}
              onVisibleChange={() => setPriceVisible(!priceVisible)}
              placement="bottomLeft"
              content={pricePopover}
              trigger="click">
              <Button block onClick={() => setPriceVisible(true)}>Chọn khoảng giá</Button>
            </Popover>
          </div></Col>
        <Col lg={4} xs={12}>
          <div className="filed">
            <Popover
              visible={areaVisible}
              onVisibleChange={() => setAreaVisible(!areaVisible)}
              placement="bottomRight"
              content={areaPopover}
              trigger="click">
              <Button block onClick={() => setAreaVisible(true)}>Diện tích tổng</Button>
            </Popover>
          </div></Col>
      </Row>
      <style jsx>{styles}</style>
    </div>
  );
};

Search.propTypes = {
};

export default Search;

const styles = css`
  .search {
    margin: 0 -10px;
  }

  .filed {
    margin: 5px 10px;
  }
  .filed :global(button) {
    height: 38px;
  }
`;
