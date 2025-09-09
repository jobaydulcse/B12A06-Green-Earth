const plantCards = document.getElementById("plant-cards");
const loader = document.getElementById("loader");
const cartContainer = document.getElementById("cart-container");
let cartList = [];

const manageLoader = (loadingStatus) => {
  if (loadingStatus) {
    loader.classList.remove("hidden");
    plantCards.classList.add("hidden");
  } else {
    loader.classList.add("hidden");
    plantCards.classList.remove("hidden");
  }
};
