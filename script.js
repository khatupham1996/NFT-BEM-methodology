const cardHeader = document.querySelector(".card__header");
const cardImage = document.querySelector(".card__image");
const imageMain = document.querySelector(".card__img-main");
const viewIcon = document.querySelector(".card__view-icon");
// card header hover effect
cardHeader.addEventListener("mouseenter", function () {
  cardImage.style.backgroundColor = "#22d3ee";
  cardImage.style.borderRadius = "0.75rem";
  imageMain.style.opacity = "0.5";
  viewIcon.style.opacity = "1";
});

cardHeader.addEventListener("mouseleave", function () {
  cardImage.style.backgroundColor = "";
  cardImage.style.borderRadius = "";
  imageMain.style.opacity = "1";
  viewIcon.style.opacity = "0";
});
// Header hover effect - separate effect for the title
cardHeader.addEventListener("mouseenter", function () {
  cardHeader.style.color = "#22d3ee";
});

cardHeader.addEventListener("mouseleave", function () {
  cardHeader.style.color = "white";
});
