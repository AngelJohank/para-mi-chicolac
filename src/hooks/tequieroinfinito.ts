import { createSignal } from "solid-js";

const createMessageArray = () => {
  return Array(20).fill("🍄 mucho ❤️");
};

const [mensajes, setMensajes] = createSignal(createMessageArray());

const observer = new IntersectionObserver(
  (entries) => {
    const element = entries[0];
    if (!element.isIntersecting) return;

    // add more items to the list
    setMensajes((v) => v.concat(createMessageArray()));
  },
  {
    rootMargin: "100px",
  }
);

export { observer, mensajes };
