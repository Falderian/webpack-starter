import { ICard } from "../../interfaces & types/card";
import "../../assets/images/spb.png";
import "../../assets/images/spb2.png";
import "../../assets/images/time-icon.png";
import "../../assets/images/checkbox.png";

export const createFirstCard = (data: ICard) => {
  const wrapper = document.querySelector(".wrapper") as HTMLDivElement;

  const imgCont = document.createElement("div") as HTMLDivElement;
  const img = document.createElement("img") as HTMLImageElement;
  const novelty = document.createElement("div") as HTMLDivElement;
  const noveltyText = document.createElement("div") as HTMLDivElement;
  img.src = `../img/spb.png`;
  imgCont.classList.add("card__img-cont");
  img.classList.add("card__img");
  novelty.classList.add("card__novelty");
  noveltyText.classList.add("novelty__text");

  noveltyText.innerText = "Новинка".toUpperCase();
  imgCont.appendChild(img);
  imgCont.appendChild(novelty);
  novelty.appendChild(noveltyText);

  const descriptionCont = document.createElement("div") as HTMLDivElement;
  const timeDiv = document.createElement("div");
  const timeSpent = document.createElement("h4") as HTMLHeadingElement;
  const timeIcon = document.createElement("img") as HTMLImageElement;
  const cardHeading = document.createElement("div") as HTMLHeadingElement;
  const cardList = document.createElement("ul") as HTMLUListElement;
  const timesDispatch = document.createElement("div") as HTMLDivElement;
  const lastRow = document.createElement("div") as HTMLDivElement;
  const price = document.createElement("div") as HTMLDivElement;
  const onlinePrice = document.createElement("div") as HTMLDivElement;
  const offlinePrice = document.createElement("div") as HTMLDivElement;
  const infoBtn = document.createElement("button") as HTMLButtonElement;
  const btnText = document.createElement("div") as HTMLDivElement;
  descriptionCont.classList.add("card__description-cont");
  timeDiv.classList.add("card__time-div");
  timeSpent.classList.add("card__time-spent");
  timeIcon.classList.add("card__time-icon");
  cardHeading.classList.add("card__heading");
  cardList.classList.add("card__list");
  timesDispatch.classList.add("card__times-dispatch");
  lastRow.classList.add("card__last-row");
  price.classList.add("card__price-div");
  onlinePrice.classList.add("card__online-price");
  offlinePrice.classList.add("card__offline-price");
  infoBtn.classList.add("card__btn");
  btnText.classList.add("btn__text");
  timeIcon.src = `../img/time-icon.png`;
  timeSpent.innerText = data.averageTime.toString() + " часа";
  cardHeading.innerText = data.heading;
  onlinePrice.innerText = data.priceOnline.toString() + " ₽";
  offlinePrice.innerText = data.price.toString() + " ₽" + " на причале";
  btnText.innerText = "Подробнее";

  descriptionCont.appendChild(timeDiv);
  timeDiv.appendChild(timeIcon);
  timeDiv.appendChild(timeSpent);
  descriptionCont.appendChild(cardHeading);
  descriptionCont.appendChild(cardList);
  descriptionCont.appendChild(timesDispatch);
  descriptionCont.appendChild(lastRow);
  lastRow.appendChild(price);
  price.appendChild(onlinePrice);
  price.appendChild(offlinePrice);
  lastRow.appendChild(infoBtn);
  infoBtn.appendChild(btnText);

  data.subheading.forEach((el) => {
    const listItem = document.createElement("li") as HTMLLIElement;
    listItem.classList.add("list__item");
    listItem.innerText = el;
    cardList.appendChild(listItem);
  });

  for (let i = 0; i < 4; i++) {
    const timeDispatch = document.createElement("div") as HTMLDivElement;
    const timeDisptachText = document.createElement("div") as HTMLDivElement;
    timeDispatch.classList.add("time__dispatch");

    timeDisptachText.innerText = data.dispatchTime;
    timesDispatch.appendChild(timeDispatch);
    timeDispatch.appendChild(timeDisptachText);
  }

  const card = document.createElement("section") as HTMLDivElement;
  card.classList.add("card");
  card.appendChild(imgCont);
  card.appendChild(descriptionCont);

  wrapper.appendChild(card);
};

export const createSecondCard = (data: ICard) => {
  const wrapper = document.querySelector(".wrapper") as HTMLDivElement;

  const imgCont = document.createElement("div") as HTMLDivElement;
  const img = document.createElement("img") as HTMLImageElement;
  const novelty = document.createElement("div") as HTMLDivElement;
  const noveltyText = document.createElement("div") as HTMLDivElement;
  img.src = `../img/spb2.png`;
  imgCont.classList.add("card__img-cont_second");
  img.classList.add("card__img_second");
  novelty.classList.add("card__novelty_second");
  noveltyText.classList.add("novelty__text_second");

  noveltyText.innerText = "Новинка".toUpperCase();
  imgCont.appendChild(img);
  imgCont.appendChild(novelty);
  novelty.appendChild(noveltyText);

  const descriptionCont = document.createElement("div") as HTMLDivElement;
  const timeDiv = document.createElement("div");
  const timeSpent = document.createElement("h4") as HTMLHeadingElement;
  const timeIcon = document.createElement("img") as HTMLImageElement;
  const cardHeading = document.createElement("div") as HTMLHeadingElement;
  const cardList = document.createElement("ul") as HTMLUListElement;
  const timesDispatch = document.createElement("div") as HTMLDivElement;
  const lastRow = document.createElement("div") as HTMLDivElement;
  const price = document.createElement("div") as HTMLDivElement;
  const onlinePrice = document.createElement("div") as HTMLDivElement;
  const offlinePrice = document.createElement("div") as HTMLDivElement;
  const infoBtn = document.createElement("button") as HTMLButtonElement;
  const btnText = document.createElement("div") as HTMLDivElement;
  descriptionCont.classList.add("card__description-cont");
  timeDiv.classList.add("card__time-div");
  timeSpent.classList.add("card__time-spent");
  timeIcon.classList.add("card__time-icon");
  cardHeading.classList.add("card__heading");
  cardList.classList.add("card__list");
  timesDispatch.classList.add("card__times-dispatch");
  lastRow.classList.add("card__last-row");
  price.classList.add("card__price-div");
  onlinePrice.classList.add("card__online-price");
  offlinePrice.classList.add("card__offline-price");
  infoBtn.classList.add("card__btn_second");
  btnText.classList.add("btn__text");
  timeIcon.src = `../img/time-icon.png`;  
  timesDispatch.style.marginTop = '9px';
  timeSpent.innerText = data.averageTime.toString() + " часа";
  cardHeading.innerText = data.heading;
  onlinePrice.innerText = "2900 ₽";
  offlinePrice.innerText = data.price.toString() + " ₽" + " на причале";
  offlinePrice.style.lineHeight = '25px';
  btnText.innerText = "Подробнее";

  descriptionCont.appendChild(timeDiv);
  timeDiv.appendChild(timeIcon);
  timeDiv.appendChild(timeSpent);
  descriptionCont.appendChild(cardHeading);
  descriptionCont.appendChild(cardList);
  descriptionCont.appendChild(timesDispatch);
  descriptionCont.appendChild(lastRow);
  lastRow.appendChild(price);
  price.appendChild(onlinePrice);
  price.appendChild(offlinePrice);
  lastRow.appendChild(infoBtn);
  infoBtn.appendChild(btnText);

  data.subheading.forEach((el) => {
    const listItem = document.createElement("li") as HTMLLIElement;
    listItem.classList.add("list__item");
    listItem.innerText = el;
    cardList.appendChild(listItem);
  });

  for (let i = 0; i < 4; i++) {
    const timeDispatch = document.createElement("div") as HTMLDivElement;
    const timeDisptachText = document.createElement("div") as HTMLDivElement;
    timeDispatch.classList.add("time__dispatch");

    timeDisptachText.innerText = data.dispatchTime;
    timesDispatch.appendChild(timeDispatch);
    timeDispatch.appendChild(timeDisptachText);
  }

  const card = document.createElement("section") as HTMLDivElement;
  card.classList.add("card");
  card.appendChild(imgCont);
  card.appendChild(descriptionCont);

  wrapper.appendChild(card);
  card.style.height = '42em';
};

