const slides = document.querySelectorAll(".slide");
const radioButtons = document.querySelectorAll('input[type="radio"]');

function showSlide(index) {
  slides.forEach((slide, slideIndex) => {
    if (slideIndex === index) {
      slide.classList.add("active");
      radioButtons[slideIndex].checked = true;
    } else {
      slide.classList.remove("active");
      radioButtons[slideIndex].checked = false;
    }
  });
}

function nextSlide() {
  const currentSlide = document.querySelector(".slide.active");
  let nextIndex = Array.from(slides).indexOf(currentSlide) + 1;
  if (nextIndex >= slides.length) {
    nextIndex = 0;
  }
  showSlide(nextIndex);
}

radioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener("change", () => {
    showSlide(index);
  });
});

// Thay đổi slide sau mỗi 2s5 giây
setInterval(nextSlide, 2500);

window.addEventListener('DOMContentLoaded', () => {
    showSlide(0); // Hiển thị slide đầu tiên ngay khi tải xong trang
  });
  
