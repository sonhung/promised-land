const DATA = [
  {
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    type: "Căn hộ chung cư",
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    aerea: "128",
    id: 123456,
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
  },
  {
    type: "Căn hộ chung cư",
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    aerea: "128",
    id: 123456,
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "Căn hộ chung cư",
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    aerea: "128",
    id: 123456,
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "Căn hộ chung cư",
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    aerea: "128",
    id: 123456,
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "Căn hộ chung cư",
    aerea: "128",
    id: 123456,
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "Căn hộ chung cư",
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    aerea: "128",
    id: 123456,
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "Căn hộ chung cư",
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    aerea: "128",
    id: 123456,
    price: "1.300.000.000",
    image:
      "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
];

const newsApi = env => {
  const getNews = async (req, res) => {
    res.send({ data: DATA, status: 200 });
  };

  const getNewsDetail = async (req, res) => {
    const data = {
      img: 'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-577160911.jpg',
      title: 'test new detail',
      images: [
        'https://cdn.luxstay.com/rooms/20465/large/room_20465_9_1563125190.png',
        'https://cdn.luxstay.com/rooms/20465/large/room_20465_8_1563125189.png',
        'https://cdn.luxstay.com/rooms/20465/large/room_20465_11_1563125193.png',
        'https://cdn.luxstay.com/rooms/20465/large/room_20465_18_1563125204.png',
      ],
    }
    res.send({ data })
  }

  return {
    getNews,
    getNewsDetail,
  };
};

module.exports = newsApi;
