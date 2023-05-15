const openPopupButton = document.getElementById("open-popup");
const closePopupButton = document.getElementById("close-popup");
const popupContainer = document.getElementById("popup-container");

function openPopup() {
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
