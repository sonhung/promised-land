import DefaultImage from "../assets/images/default-image.jpeg";

export const DEFAULT_IMAGE = DefaultImage;

export const HOUSE_TYPE = {
  house: "Nhà đất",
  apartment: "Căn hộ chung cư",
  guestroom: "Phòng trọ",
  villa: "Biệt thự"
};

export const PLACES_TYPE = [
  {
    type: "school",
    text: "Trường học"
  },
  {
    type: "hospital",
    text: "Bệnh viện"
  },
  {
    type: "supermaket",
    text: "Siêu thị"
  },
  {
    type: "market",
    text: "Chợ"
  },
  {
    type: "park",
    text: "Công viên"
  },
  {
    type: "drink_food",
    text: "Ăn/Uống"
  }
]

export const TYPE = [
  {
    value: 'all',
    label: 'Tất cả loại bất động sản'
  },
  {
    value: 'house',
    label: 'Nhà đất'
  },
  {
    value: 'apartment',
    label: 'Căn hộ'
  },
  {
    value: 'villa',
    label: 'Biệt thự'
  },
  {
    value: 'guestroom',
    label: 'Phòng trọ'
  }
]

export const SEARCH_TYPE = {...HOUSE_TYPE}
