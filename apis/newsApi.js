const DATA = [
  {
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    type: "Căn hộ chung cư",
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    aerea: "128",
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh"
  },
  {
    type: "Căn hộ chung cư",
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    aerea: "128",
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    type: "Căn hộ chung cư",
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    aerea: "128",
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    type: "Căn hộ chung cư",
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    aerea: "128",
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    type: "Căn hộ chung cư",
    aerea: "128",
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    image:
      "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    type: "Căn hộ chung cư",
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    image:
      "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    aerea: "128",
    price: "1.300.000.000",
    address: "Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    type: "Căn hộ chung cư",
    name: `The Landmark 81 Premium 4 Bedrooms w Panorama City View * Sweethost SG's Apt`,
    aerea: "128",
    price: "1.300.000.000",
    image:
      "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  }
];

const authApi = env => {
  const getNews = async (req, res) => {
    console.log("query", req.query);
    res.send({ data: DATA, status: 200 });
  };

  return {
    getNews
  };
};

module.exports = authApi;
