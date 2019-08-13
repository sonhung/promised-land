import React, { useState } from "react";
import css from "styled-jsx/css";
import Select from "react-select";
import { Row, Col } from "antd";

import PopoverSlider from "./PopoverSlider";
import { provinces, districts } from "../../constants/administrativeUnit";
import { TYPE } from "../../constants";

const maxPrice = 30000000000;
const maxArea = 500;

const priceMark = {
  0: {
    style: {
      marginLeft: "35px",
      color: "#222"
    },
    label: "Giá tối thiểu"
  },
  30000000000: {
    style: {
      color: "#222",
      left: "none",
      right: "0",
      transform: "none"
    },
    label: "Giá tối đa"
  }
};

const areaMark = {
  0: {
    style: {
      marginLeft: "53px",
      color: "#222"
    },
    label: "Diện tích tối thiểu"
  },
  500: {
    style: {
      color: "#222",
      left: "none",
      right: "0",
      transform: "none"
    },
    label: "Diện tích tối đa"
  }
};

const Search = props => {
  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
  const [districtsShow, setDistrictsShow] = useState([]);
  const [houseType, setHouseType] = useState();
  // for price
  const [priceConfig, setPriceConfig] = useState([0, maxPrice]);
  const [priceStep, setPriceStep] = useState(100000000);
  // for area
  const [areaConfig, setAreaConfig] = useState([0, maxArea]);
  const [areaStep, setAreaStep] = useState(5);

  const chooseProvince = data => {
    setProvince(data);
    setDistrictsShow(districts[data.type]);
    if (data !== province) setDistrict(null);
  };

  const chooseDistrict = data => {
    setDistrict(data);
  };

  const chooseHouseType = data => {
    setHouseType(data);
  };

  // for price
  const changePrice = value => {
    if (value[0] > 7000000000) setPriceStep(500000000);
    if (value[0] <= 7000000000) setPriceStep(100000000);
    setPriceConfig(value);
  };

  const fillterPrice = () => {
    console.log("douma ahihi");
  };

  // for area
  const changeArea = value => {
    if (value[0] > 200) setAreaStep(50);
    if (value[0] <= 200) setAreaStep(5);
    setAreaConfig(value);
  };

  const fillterArea = () => {
    console.log("douma ahihi");
  };

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
          </div>
        </Col>
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
          <div className="fileddsds">
            <PopoverSlider
              rangeValue={priceConfig}
              maxRangge={maxPrice}
              type="price"
              more
              tooltipVisible={false}
              step={priceStep}
              popoverMark={priceMark}
              changeValue={changePrice}
              apply={fillterPrice}
              position="bottomLeft"
              buttonText="Chọn khoảng giá"
            />
          </div>
        </Col>
        <Col lg={4} xs={12}>
          <div className="fileddd">
            <PopoverSlider
              rangeValue={areaConfig}
              maxRangge={maxArea}
              type="area"
              more
              tooltipVisible={false}
              step={areaStep}
              popoverMark={areaMark}
              changeValue={changeArea}
              apply={fillterArea}
              position="bottomRight"
              buttonText="Diện tích tổng"
            />
          </div>
        </Col>
      </Row>
      <style jsx>{styles}</style>
    </div>
  );
};

Search.propTypes = {};

export default Search;

const styles = css`
  .search {
    margin: 0 -10px;
  }

  .filed {
    margin: 5px 10px;
  }
`;
