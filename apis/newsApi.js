const { find } = require('lodash')
const DATA = [
  {
    "_id": "5d448fdc3eef6b653eb49814",
    "website_name": "alonhadat.com.vn",
    "title": "#Cần Tiền sang nhanh căn nhà đường Tô Ngọc Vân,nhà mới đúc 1trệt 2lầu thiết kế sang tron",
    "referer": "https://alonhadat.com.vn/nha-dat/can-ban/nha-mat-tien.html",
    "source_url": "https://alonhadat.com.vn/-can-tien-sang-nhanh-can-nha-duong-to-ngoc-van-nha-moi-duc-1tret-2lau-thiet-ke-sang-tron-4860255.html",
    "prop_type": "house",
    "raw_address": "Đường Tô Ngọc Vân, Phường Thạnh Xuân, Quận 12, Hồ Chí Minh",
    "direction": "_",
    "country": "VN",
    "n_floors": 2,
    "n_bedrooms": 3,
    "description": "- Giải pháp nhà phố giá rẻ quận 12 .\r\n- Vị trí cực đẹp ngay tuyến đường Tô Ngọc Vân kết nối Gò Vấp - Quận 12 \r\n- Thiết kế hiện đại 1 trệt 2 lầu đúc thật với 3 phòng ngủ, 3 toilet có sân phơi.\r\n- Vị trí ngay chợ với tiện ích xung quanh đầy đủ: Gần trường học, bệnh viện, siêu thị, di chuyển về Gò Vấp chỉ 500m \r\n- Kiến trúc kiên cố do đơn vị uy tín xây dựng cam kết bảo hành đến 10 năm.\r\n- Diện tích sử dụng 75m2.\r\n- Nhận nhà ngay \r\n- Pháp lý đảm bảo , \r\n- Giá tốt nhất thị trường chỉ 1,6 tỷ.\r\n- Cực kì phù hợp với người có thu nhập trung bình, vợ chồng trẻ, gia đình ít người.\r\n- Dự án còn là cơ hội đầu tư không thể tốt hơn với sản phẩm trực tiếp chủ đầu tư, ít vốn lợi nhuận cao.\r\n- Gọi ngay cho chúng tôi để sở hữu ngay cho mình căn nhà ưng ý nhất.\r\nLiên hệ : 0933.338.655 Gặp Hoàng  phòng kinh doanh Cty Chủ Đầu Tư.",
    "area": 75,
    "price": 1600000000,
    "photos": [

      'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_9_1563125190.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_8_1563125189.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_11_1563125193.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_18_1563125204.png',
      'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?',
      'https://a0.muscache.com/im/pictures/74a8c300-941d-4c15-887d-8ed1bd8c9b80.jpg'
    ],
    "house_type": "facade",
    "saler": "5d448fd93eef6b653eb49812"
  },
  {
    "_id": "5d448fd93eef6b653eb49813",
    "website_name": "alonhadat.com.vn",
    "title": "Bán Gấp 2 Căn Nhà Phố Kinh Doanh Thống Nhất Nối Dài, 1trệt 1lửng 2lầu.",
    "referer": "https://alonhadat.com.vn/nha-dat/can-ban/nha-mat-tien.html",
    "source_url": "https://alonhadat.com.vn/ban-gap-2-can-nha-pho-kinh-doanh-thong-nhat-noi-dai-1tret-1lung-2lau--4863010.html",
    "prop_type": "house",
    "raw_address": "Đường Tô Ngọc Vân, Phường Thạnh Xuân, Quận 12, Hồ Chí Minh",
    "direction": "_",
    "country": "VN",
    "n_floors": 2,
    "n_bedrooms": 4,
    "description": "- Vị trí đắc địa tại quận 12, di chuyển về trung tâm Gò Vấp, Bình Thạnh, Thủ Đức, Tân Bình 12p. \r\n- Được thiết kế bởi kỹ sư lành nghề, đồng bộ quy hoạch hiện đại đúc thật 1 trệt 1 lửng 3 lầu 2 phòng khách, bếp, 4 phòng ngủ, 4wc, sân phơi, giếng trời, c ây xanh th oáng m át xung quanh.\r\n- kinh doanh được tất cả mọi nghành nghề. \r\n- Đường rộng, địa chỉ rõ ràng dễ tìm, dễ vận chuy ển giao thương.\r\n- Xung quanh được bao bọc bởi dân cư hiện hữu, chợ, trường quốc tế các cấp, bệnh viện, siêu thị, và không gian xanh thoáng mát… \r\n- Nhà rộng rất thoải mái cho gia đình đông thành viên, dân cư sầm uất. \r\n- Diện tích lần lượt là: 220m2, 230m2,240m2,320m2 \r\n-pháp lý: sổ hồng công chứng sang tên trong ngày. \r\n-giá: 3,67 tỷ ngân hàng hỗ trợ vay 70%\r\n- hotline: 0933.338.655 Gặp Hoàng để biết thêm thông tin chi tiết.",
    "area": 220,
    "price": "3670000000",
    "photos": [
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_9_1563125190.png',
      'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_8_1563125189.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_11_1563125193.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_18_1563125204.png',
      'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?',
      'https://a0.muscache.com/im/pictures/74a8c300-941d-4c15-887d-8ed1bd8c9b80.jpg'
    ],
    "house_type": "facade",
    "saler": "5d448fd93eef6b653eb49812"
  },
  {
    "_id": "5d448fdc3eef6b653eb49814",
    "website_name": "alonhadat.com.vn",
    "title": "#Cần Tiền sang nhanh căn nhà đường Tô Ngọc Vân,nhà mới đúc 1trệt 2lầu thiết kế sang tron",
    "referer": "https://alonhadat.com.vn/nha-dat/can-ban/nha-mat-tien.html",
    "source_url": "https://alonhadat.com.vn/-can-tien-sang-nhanh-can-nha-duong-to-ngoc-van-nha-moi-duc-1tret-2lau-thiet-ke-sang-tron-4860255.html",
    "prop_type": "house",
    "raw_address": "Đường Tô Ngọc Vân, Phường Thạnh Xuân, Quận 12, Hồ Chí Minh",
    "direction": "_",
    "country": "VN",
    "n_floors": 2,
    "n_bedrooms": 3,
    "description": "- Giải pháp nhà phố giá rẻ quận 12 .\r\n- Vị trí cực đẹp ngay tuyến đường Tô Ngọc Vân kết nối Gò Vấp - Quận 12 \r\n- Thiết kế hiện đại 1 trệt 2 lầu đúc thật với 3 phòng ngủ, 3 toilet có sân phơi.\r\n- Vị trí ngay chợ với tiện ích xung quanh đầy đủ: Gần trường học, bệnh viện, siêu thị, di chuyển về Gò Vấp chỉ 500m \r\n- Kiến trúc kiên cố do đơn vị uy tín xây dựng cam kết bảo hành đến 10 năm.\r\n- Diện tích sử dụng 75m2.\r\n- Nhận nhà ngay \r\n- Pháp lý đảm bảo , \r\n- Giá tốt nhất thị trường chỉ 1,6 tỷ.\r\n- Cực kì phù hợp với người có thu nhập trung bình, vợ chồng trẻ, gia đình ít người.\r\n- Dự án còn là cơ hội đầu tư không thể tốt hơn với sản phẩm trực tiếp chủ đầu tư, ít vốn lợi nhuận cao.\r\n- Gọi ngay cho chúng tôi để sở hữu ngay cho mình căn nhà ưng ý nhất.\r\nLiên hệ : 0933.338.655 Gặp Hoàng  phòng kinh doanh Cty Chủ Đầu Tư.",
    "area": 75,
    "price": 1600000000,
    "photos": [
      'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_9_1563125190.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_8_1563125189.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_11_1563125193.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_18_1563125204.png',
      'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?',
      'https://a0.muscache.com/im/pictures/74a8c300-941d-4c15-887d-8ed1bd8c9b80.jpg'
    ],
    "house_type": "facade",
    "saler": "5d448fd93eef6b653eb49812"
  },
  {
    "_id": "5d448fde3eef6b653eb49816",
    "website_name": "alonhadat.com.vn",
    "title": "Bán gấp nhà 3 lầu 80m2 mới 100% SHR, đường xe hơi, ngay Coopmart Bình Triệu , có BIDV 70%",
    "referer": "https://alonhadat.com.vn/nha-dat/can-ban/nha-mat-tien.html",
    "source_url": "https://alonhadat.com.vn/hot-chuyen-cho-o-can-ban-gap-nha-68m2-gan-pham-van-dong-hiep-binh-chanh-4707503.html",
    "prop_type": "house",
    "raw_address": "Đường Phạm Văn Đồng, Phường Hiệp Bình Chánh, Quận Thủ Đức, Hồ Chí Minh",
    "direction": "Đông Bắc",
    "country": "VN",
    "n_floors": 3,
    "n_bedrooms": 4,
    "description": "HOTLINE : 0776613388 MS ĐIỆP\r\n\r\n Gia đình tôi cần sang nhượng lại căn nhà mới 3 lầu 80m2 đường số 8, Hiệp Bình Chánh, Thủ Đức, sau Coop Mart Bình Triệu.\r\n\r\nDiện tích: 5x16m.\r\n\r\nKết cấu: 1 trệt 3 lầu, đường ô tô \r\n\r\nNhà mới xây chưa qua sử dụng lần nào, cam kết bảo hành nhà 5 năm. Khi giao nhà bàn giao toàn bộ nội thất.\r\nNhà đầy đủ công năng sử dụng, dọn vào là ở. Khu dân cư trí thức, an ninh cao, mát mẻ, hàng xóm thân thiện\r\nĐường trước nhà 10m, kế bên là chợ, và siêu thị. Đối diện có trường đại học Luật và nhà thờ Fatima - Caristal. Cách Phạm Văn Đồng 2p đi xe.\r\n\r\nĐi sân bay - bến xe Miền Đông - đi các quận trung tâm nhanh như chớp.\r\nKhu nhà ở cực kì đẹp, sổ hồng riêng, hoàn công đầy đủ. Giá thương lượng trực tiếp với chủ, không qua môi giới.\r\n\r\nHình ảnh và thông tin thật - tránh mất thời gian khách và chủ.\r\nMọi thông tin xin liên hệ qua số: 0776613388 chủ nhà.",
    "area": 80,
    "price": 81000000,
    "photos": [
      'https://a0.muscache.com/im/pictures/74a8c300-941d-4c15-887d-8ed1bd8c9b80.jpg',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_9_1563125190.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_8_1563125189.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_11_1563125193.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_18_1563125204.png',
      'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?',

    ],
    "house_type": "facade",
    "saler": "5d448fde3eef6b653eb49815"
  },
  {
    "_id": "5d448fe13eef6b653eb49817",
    "website_name": "alonhadat.com.vn",
    "title": "Bán nhà ngay chợ Hiệp Bình,1 trệt 3 lầu ,sổ hồng riêng.Cách Phạm Văn Đồng 200m HBC",
    "referer": "https://alonhadat.com.vn/nha-dat/can-ban/nha-mat-tien.html",
    "source_url": "https://alonhadat.com.vn/nha-3-lau-106m2-ngay-cho-hiep-binh-giam-400-trieu-cho-khach-thien-chi-0776613388-ms-diep-4763462.html",
    "prop_type": "house",
    "raw_address": "Đường Phạm Văn Đồng, Phường Hiệp Bình Chánh, Quận Thủ Đức, Hồ Chí Minh",
    "direction": "Tây Bắc",
    "country": "VN",
    "n_floors": 3,
    "n_bedrooms": 4,
    "description": "Tôi chính chủ cần bán nhà 1 trệt 3 lầu mới xây , nằm gần chợ Hiệp Bình , khu dân cư an ninh , yên tĩnh \r\n\r\nDiện tích : 4x15\r\n\r\nSổ hồng riêng , đã hoàn công \r\n\r\nBảo hành nhà 5 năm \r\n\r\nCó hỗ trợ khách vay mua nhà ( có hỗ trợ chứng minh thu nhập )\r\n\r\nLiên hệ 0776613388 MS ĐIỆP ( chính chủ xem nhà )",
    "area": 80,
    "price": "4300000000",
    "photos": [
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_9_1563125190.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_8_1563125189.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_11_1563125193.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_18_1563125204.png',
      'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?',
      'https://a0.muscache.com/im/pictures/74a8c300-941d-4c15-887d-8ed1bd8c9b80.jpg'
    ],
    "house_type": "facade",
    "saler": "5d448fde3eef6b653eb49815"
  },
  {
    "_id": "5d448fdc3eef6b653eb49814",
    "website_name": "alonhadat.com.vn",
    "title": "#Cần Tiền sang nhanh căn nhà đường Tô Ngọc Vân,nhà mới đúc 1trệt 2lầu thiết kế sang tron",
    "referer": "https://alonhadat.com.vn/nha-dat/can-ban/nha-mat-tien.html",
    "source_url": "https://alonhadat.com.vn/-can-tien-sang-nhanh-can-nha-duong-to-ngoc-van-nha-moi-duc-1tret-2lau-thiet-ke-sang-tron-4860255.html",
    "prop_type": "house",
    "raw_address": "Đường Tô Ngọc Vân, Phường Thạnh Xuân, Quận 12, Hồ Chí Minh",
    "direction": "_",
    "country": "VN",
    "n_floors": 2,
    "n_bedrooms": 3,
    "description": "- Giải pháp nhà phố giá rẻ quận 12 .\r\n- Vị trí cực đẹp ngay tuyến đường Tô Ngọc Vân kết nối Gò Vấp - Quận 12 \r\n- Thiết kế hiện đại 1 trệt 2 lầu đúc thật với 3 phòng ngủ, 3 toilet có sân phơi.\r\n- Vị trí ngay chợ với tiện ích xung quanh đầy đủ: Gần trường học, bệnh viện, siêu thị, di chuyển về Gò Vấp chỉ 500m \r\n- Kiến trúc kiên cố do đơn vị uy tín xây dựng cam kết bảo hành đến 10 năm.\r\n- Diện tích sử dụng 75m2.\r\n- Nhận nhà ngay \r\n- Pháp lý đảm bảo , \r\n- Giá tốt nhất thị trường chỉ 1,6 tỷ.\r\n- Cực kì phù hợp với người có thu nhập trung bình, vợ chồng trẻ, gia đình ít người.\r\n- Dự án còn là cơ hội đầu tư không thể tốt hơn với sản phẩm trực tiếp chủ đầu tư, ít vốn lợi nhuận cao.\r\n- Gọi ngay cho chúng tôi để sở hữu ngay cho mình căn nhà ưng ý nhất.\r\nLiên hệ : 0933.338.655 Gặp Hoàng  phòng kinh doanh Cty Chủ Đầu Tư.",
    "area": 75,
    "price": 1600000000,
    "photos": [
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_9_1563125190.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_8_1563125189.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_11_1563125193.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_18_1563125204.png',
      'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?',
      'https://a0.muscache.com/im/pictures/74a8c300-941d-4c15-887d-8ed1bd8c9b80.jpg'
    ],
    "house_type": "facade",
    "saler": "5d448fd93eef6b653eb49812"
  },
  {
    "_id": "5d448fdc3eef6b653eb49814",
    "website_name": "alonhadat.com.vn",
    "title": "#Cần Tiền sang nhanh căn nhà đường Tô Ngọc Vân,nhà mới đúc 1trệt 2lầu thiết kế sang tron",
    "referer": "https://alonhadat.com.vn/nha-dat/can-ban/nha-mat-tien.html",
    "source_url": "https://alonhadat.com.vn/-can-tien-sang-nhanh-can-nha-duong-to-ngoc-van-nha-moi-duc-1tret-2lau-thiet-ke-sang-tron-4860255.html",
    "prop_type": "house",
    "raw_address": "Đường Tô Ngọc Vân, Phường Thạnh Xuân, Quận 12, Hồ Chí Minh",
    "direction": "_",
    "country": "VN",
    "n_floors": 2,
    "n_bedrooms": 3,
    "description": "- Giải pháp nhà phố giá rẻ quận 12 .\r\n- Vị trí cực đẹp ngay tuyến đường Tô Ngọc Vân kết nối Gò Vấp - Quận 12 \r\n- Thiết kế hiện đại 1 trệt 2 lầu đúc thật với 3 phòng ngủ, 3 toilet có sân phơi.\r\n- Vị trí ngay chợ với tiện ích xung quanh đầy đủ: Gần trường học, bệnh viện, siêu thị, di chuyển về Gò Vấp chỉ 500m \r\n- Kiến trúc kiên cố do đơn vị uy tín xây dựng cam kết bảo hành đến 10 năm.\r\n- Diện tích sử dụng 75m2.\r\n- Nhận nhà ngay \r\n- Pháp lý đảm bảo , \r\n- Giá tốt nhất thị trường chỉ 1,6 tỷ.\r\n- Cực kì phù hợp với người có thu nhập trung bình, vợ chồng trẻ, gia đình ít người.\r\n- Dự án còn là cơ hội đầu tư không thể tốt hơn với sản phẩm trực tiếp chủ đầu tư, ít vốn lợi nhuận cao.\r\n- Gọi ngay cho chúng tôi để sở hữu ngay cho mình căn nhà ưng ý nhất.\r\nLiên hệ : 0933.338.655 Gặp Hoàng  phòng kinh doanh Cty Chủ Đầu Tư.",
    "area": 75,
    "price": 1600000000,
    "photos": [
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_9_1563125190.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_8_1563125189.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_11_1563125193.png',
      'https://cdn.luxstay.com/rooms/20465/large/room_20465_18_1563125204.png',
      'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?',
      'https://a0.muscache.com/im/pictures/74a8c300-941d-4c15-887d-8ed1bd8c9b80.jpg'
    ],
    "house_type": "facade",
    "saler": "5d448fd93eef6b653eb49812"
  }
]

const newsApi = env => {
  const getNews = async (req, res) => {
    res.send({ data: DATA, status: 200 });
  };

  const getNewsDetail = async (req, res) => {
    const { params: { id } = {} } = req
    const data = find(DATA, function(o) { return o._id === id })
    res.send({ data })
  }

  return {
    getNews,
    getNewsDetail,
  };
};

module.exports = newsApi;
