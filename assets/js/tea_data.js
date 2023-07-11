var productList = [
    {
      name: "Trà Sen Vàng",
      price: "45.000 VNĐ",
      image: "/assets/images/sp3.png",
    },
    {
      name: "Trà Sen Vàng",
      price: "45.000 VNĐ",
      image: "/assets/images/sp3.png",
    },
    {
      name: "Trà Sen Vàng",
      price: "45.000 VNĐ",
      image: "/assets/images/sp3.png",
    },
    {
      name: "Trà Sen Vàng",
      price: "45.000 VNĐ",
      image: "/assets/images/sp3.png",
    },
    {
      name: "Trà Sen Vàng",
      price: "45.000 VNĐ",
      image: "/assets/images/sp3.png",
    },
    {
      name: "Trà Sen Vàng",
      price: "45.000 VNĐ",
      image: "/assets/images/sp3.png",
    },
  ];
  
  // Chuyển đổi mảng danh sách sản phẩm sang chuỗi JSON
  var productListJSON = JSON.stringify(productList);
  
  // Lưu chuỗi JSON vào local storage
  localStorage.setItem("productList", productListJSON);
  
  
  