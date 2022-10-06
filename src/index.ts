import { createFirstCard, createSecondCard } from "./components/card/createCard";
import { Card } from "./components/data/card";
import "./styles/main.scss";

const createBaseLayout = () => {
  const body = document.querySelector("body") as HTMLBodyElement;
  const wrapper = document.createElement("section") as HTMLDivElement;

  wrapper.classList.add("wrapper");

  body.appendChild(wrapper);
};

createBaseLayout();
createFirstCard(Card);
createSecondCard(Card);