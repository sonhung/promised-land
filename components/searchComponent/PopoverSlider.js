import React, { useState, useEffect, useRef } from "react";
import { array, number, string, object, bool, func } from "prop-types";
import styled from "styled-components";
import { Popover, Button, Slider } from "antd";

import { formatPrice } from "../../utils";

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
`;

const ButtonBlock = styled.div`
  button {
    height: 38px;
  }
`

const PopoverRange = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #ff4d4f;
  margin-bottom: 25px;
`;

const Sup = styled.sup`
  position: relative;
  top: -3px;
`;

const PopoverSlider = props => {
  const {
    rangeValue = [],
    maxRangge,
    type = "",
    tooltipVisible,
    step,
    popoverMark,
    changeValue,
    apply,
    position,
    buttonText,
  } = props;

  const [visible, setVisible] = useState();
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  const applyFilter = () => {
    setVisible(false);
    apply();
  };

  const popoverBlock = (
    <PopoverContainer ref={popoverRef}>
      {type === "price" && (
        <PopoverRange>
          {formatPrice(rangeValue[0])}
          <span>đ - </span>
          {formatPrice(rangeValue[1])}
          <span>đ</span>
          {`${rangeValue[1] === maxRangge ? "+" : ""}`}
        </PopoverRange>
      )}
      {type === "area" && (
        <PopoverRange>
          {rangeValue[0]}
          <span>
            m<Sup>2</Sup> -{" "}
          </span>
          {rangeValue[1]}
          <span>
            m<Sup>2</Sup>
          </span>
          {`${rangeValue[1] === maxRangge ? "+" : ""}`}
        </PopoverRange>
      )}
      <Slider
        tooltipVisible={tooltipVisible}
        range
        min={0}
        max={maxRangge}
        step={step}
        defaultValue={rangeValue}
        marks={popoverMark}
        onChange={changeValue}
      />
      <Button block type="danger" onClick={applyFilter}>
        Áp dụng
      </Button>
    </PopoverContainer>
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setVisible(false);
      }
    }
  };

  return (
    <div>
      <Popover
        visible={visible > 0}
        placement={position}
        content={popoverBlock}
        trigger="click"
      >
        <ButtonBlock ref={buttonRef}>
          <Button block onClick={() => setVisible(true)}>
            {buttonText}
          </Button>
        </ButtonBlock>
      </Popover>
    </div>
  );
};

PopoverSlider.propTypes = {
  rangeValue: array,
  maxRangge: number,
  type: string,
  tooltipVisible: bool,
  step: number,
  popoverMark: object,
  changeValue: func,
  apply: func,
  position: string,
  buttonText: string,
};

export default PopoverSlider;
