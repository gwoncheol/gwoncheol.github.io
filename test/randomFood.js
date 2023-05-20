const openPopupButton = document.getElementById("open-popup");
const closePopupButton = document.getElementById("close-popup");
const popupContainer = document.getElementById("popup-container");
const foodNameElement = document.querySelector(".foodName");
const foodImgElement = document.querySelector(".foodImg");

// Sample data for demonstration
const foodNames = [
  "치킨",
  "햄버거",
  "바베큐",
  "파스타",
  "피자",
  "샌드위치",
  "스테이크",
  "샐러드",
  "연어 스테이크",
  "리조또",
  "필라프",
  "우동",
  "초밥",
  "라멘",
  "덴푸라",
  "오코노미야키",
  "차즈케",
  "오뎅",
  "쟈오쯔",
  "스프",
  "베이글",
  "카르보나라",
  "또띠아",
];
const foodImages = [
  "https://images.pexels.com/photos/14686445/pexels-photo-14686445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=422&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",

  "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",

  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",

  "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",

  "https://images.unsplash.com/photo-1558199141-391d935676f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",

  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",

  "https://images.unsplash.com/photo-1625944226626-9bd664656506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80",

  "https://images.unsplash.com/photo-1637361874063-e5e415d7bcf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",

  "https://images.unsplash.com/photo-1634324092536-74480096b939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

  "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",

  "https://images.unsplash.com/photo-1590987337605-84f3ed4dc29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

  "https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",

  "https://images.unsplash.com/photo-1593357849627-cbbc9fda6b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",

  "https://images.unsplash.com/photo-1648221825803-4e02a95bf062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",

  "https://images.unsplash.com/photo-1521136828306-f7b6db30f4ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",

  "https://images.unsplash.com/photo-1612492084463-6058e597df6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80",

  "https://images.unsplash.com/photo-1681747941397-1e2b22e0bb9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",

  "https://images.unsplash.com/photo-1605909388460-74ec8b204127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",

  "https://images.unsplash.com/photo-1585841393823-1680ba8648e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",

  "https://images.unsplash.com/photo-1619740455768-b2bca145cc7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

  "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",

  "https://images.unsplash.com/photo-1593759608136-45eb2ad9507d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=859&q=80",
];

function getRandomFood() {
  const randomIndex = Math.floor(Math.random() * foodNames.length);
  const foodName = foodNames[randomIndex];
  const foodImage = foodImages[randomIndex];
  return { foodName, foodImage };
}

function openPopup() {
  const { foodName, foodImage } = getRandomFood();

  foodNameElement.textContent = foodName;
  foodImgElement.src = foodImage;
  foodImgElement.alt = foodName;

  popupContainer.style.visibility = "visible";
  popupContainer.style.opacity = 1;
}

function closePopup() {
  popupContainer.style.visibility = "hidden";
  popupContainer.style.opacity = 0;
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
popupContainer.addEventListener("click", (event) => {
  if (event.target === popupContainer) {
    closePopup();
  }
});
