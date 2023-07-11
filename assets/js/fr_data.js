var productList = [
    {
      name: "Freeze Cream",
      price: "55.000 VNĐ",
      image: "/assets/images/sp2.png",
    },
    {
      name: "Freeze Cream",
      price: "55.000 VNĐ",
      image: "/assets/images/sp2.png",
    },
    {
      name: "Freeze Cream",
      price: "55.000 VNĐ",
      image: "/assets/images/sp2.png",
    },
    {
      name: "Freeze Cream",
      price: "55.000 VNĐ",
      image: "/assets/images/sp2.png",
    },
    {
      name: "Freeze Cream",
      price: "55.000 VNĐ",
      image: "/assets/images/sp2.png",
    },
    {
      name: "Freeze Cream",
      price: "55.000 VNĐ",
      image: "/assets/images/sp2.png",
    },
  ];
  
  // Chuyển đổi mảng danh sách sản phẩm sang chuỗi JSON
  var productListJSON = JSON.stringify(productList);
  
  // Lưu chuỗi JSON vào local storage
  localStorage.setItem("productList", productListJSON);
  
  
  