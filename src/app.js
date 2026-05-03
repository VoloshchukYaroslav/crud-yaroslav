import { getIce } from "./API/getice";
import { postIce } from "./API/postice";
import { delIce } from "./API/delice";
import { updateIce } from "./API/updateice";
const openBtn = document.querySelector(".btn");
const listRef = document.querySelector(".list");
const backdropRef = document.querySelector(".backdrop");
const formRef = document.querySelector(".form");

let currentId = null;

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
    flavour: name,
    type: type,
    description: desk,
    image: url,
    price: price,
  };
  if (currentId === null) {
    postIce(iceData)
      .then(getIce)
      .then((res) => creatIceMarcap(res));

    evt.currentTarget.reset();
    closeModal();
    return;
  }
  updateIce(currentId, iceData)
    .then(getIce)
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
    <button data-action="edit" type="button">Edit</button>
    <button data-action="delet" type="button">Delet</button>
   </li>`;
    })
    .join("");
  listRef.innerHTML = item;
}

listRef.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  if (!action) {
    return;
  }
  const li = e.target.closest("li");
  const id = li.id;
  if (action === "delet") {
    delIce(id)
      .then(getIce)
      .then((res) => creatIceMarcap(res));
  }
  if (action === "edit") {
    openModal();
    currentId = id;
    console.log(currentId);
    formRef.elements.name.value = li.querySelector(".title").textContent;
    formRef.elements.type.value = li.querySelector(".text").textContent;
    formRef.elements.desk.value = li.querySelector(".desk").textContent;
    formRef.elements.url.value = li.querySelector(".pic").src;
    formRef.elements.price.value = li.querySelector(".price").textContent;
  }
});
