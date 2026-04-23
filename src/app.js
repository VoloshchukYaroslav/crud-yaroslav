import { getIce } from "./API/getice";
import { postIce } from "./API/postice";
const openBtn = document.querySelector(".btn");
const listRef = document.querySelector(".list");
const backdropRef = document.querySelector(".backdrop");
const formRef = document.querySelector(".form");

function openModal() {
  backdropRef.style.display = "flex";
}

function closeModal() {
  backdropRef.style.display = "none";
}

openBtn.addEventListener("click", () => {
  openModal();
});

formRef.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const name = evt.currentTarget.elements.name.value;
  const type = evt.currentTarget.elements.type.value;
  const desk = evt.currentTarget.elements.desk.value;
  const url = evt.currentTarget.elements.url.value;
  const price = evt.currentTarget.elements.price.value;

  const iceData = {
    name: name,
    type: type,
    desk: desk,
    url: url,
    price: price,
  };

  postIce(iceData)
    .then((res) => getIce(res))
    .then((res) => creatIceMarcap(res));

  evt.currentTarget.reset();
  closeModal();
});

getIce().then((res) => creatIceMarcap(res));

function creatIceMarcap(arr) {
  const item = arr
    .map(({ flavour, type, price, description, image, id }) => {
      return ` <li class="item" id = "${id}">
     <img class="pic" src="${image}" alt="${description}">
     <h2 class="title">${flavour}</h2>
     <p class="text">${type}</p>
     <p class="desk">${description}</p>
    <p class="price">${price}</p>
   </li>`;
    })
    .join("");
  listRef.innerHTML = item;
}
