const imgs = document.querySelectorAll(".img a");

let imgId = 1;

const imgDiv = document.querySelectorAll(".img");

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    imgId = img.dataset.id;
    imgDiv.forEach((img) => {
      img.classList.remove("active");
    });
    img.parentElement.classList.add("active");
    moveImg();
  });
});

function moveImg() {
  const imgWidth = document.querySelector(
    ".main-img img:first-child"
  ).clientWidth;
  let width = (imgId - 1) * imgWidth;

  document.querySelector(
    ".main-img"
  ).style.transform = `translate(${-width}px)`;
}

const minusBtn = document.getElementById("minus");
const pluseBtn = document.getElementById("pluse");
const qtytxt = document.getElementById("qty");

minusBtn.addEventListener("click", () => {
  let qty = parseInt(qtytxt.value);
  if (qty > 0) {
    qty--;
    qtytxt.value = qty;
  }
});
pluseBtn.addEventListener("click", () => {
  let qty = parseInt(qtytxt.value);
  if (qty >= 0 && qty < 5) {
    qty++;
    qtytxt.value = qty;
  }
});
