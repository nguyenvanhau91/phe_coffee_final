var productList = [
  {
    name: "PHIN SỮA ĐÁ",
    price: "29.000 VNĐ",
    image: "/assets/images/sp1.png",
  },
  {
    name: "PHIN SỮA ĐÁ",
    price: "29.000 VNĐ",
    image: "/assets/images/sp1.png",
  },
  {
    name: "PHIN SỮA ĐÁ",
    price: "29.000 VNĐ",
    image: "/assets/images/sp1.png",
  },
  {
    name: "PHIN SỮA ĐÁ",
    price: "29.000 VNĐ",
    image: "/assets/images/sp1.png",
  },
  {
    name: "PHIN SỮA ĐÁ",
    price: "29.000 VNĐ",
    image: "/assets/images/sp1.png",
  },
  {
    name: "PHIN SỮA ĐÁ",
    price: "29.000 VNĐ",
    image: "/assets/images/sp1.png",
  },
];

// Chuyển đổi mảng danh sách sản phẩm sang chuỗi JSON
var productListJSON = JSON.stringify(productList);

// Lưu chuỗi JSON vào local storage
localStorage.setItem("productList", productListJSON);


