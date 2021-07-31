import { createPopper } from "@popperjs/core";
import "../css/content.css";

const createPopup = () => {
  const div = document.createElement("div");
  div.id = "era-popup";
  div.classList.add("hidden");

  document.body.appendChild(div);

  return div;
};

const popup = createPopup();

const initializePopper = (el) => {
  const generateGetBoundingClientRect = (x = 0, y = 0) => {
    return () => ({
      width: 0,
      height: 0,
      top: y,
      right: x,
      bottom: y,
      left: x,
    });
  };

  const virtualElement = {
    getBoundingClientRect: generateGetBoundingClientRect(),
  };

  const instance = createPopper(virtualElement, el, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [32, 0],
        },
      },
    ],
  });

  const updatePosition = (x, y) => {
    virtualElement.getBoundingClientRect = generateGetBoundingClientRect(x, y);
    instance.update();
  };

  return { updatePosition };
};

const { updatePosition } = initializePopper(popup);

const showPopup = (year, x, y) => {
  popup.innerText = year;
  popup.classList.remove("hidden");
  updatePosition(x, y);

  setImmediate(() => {
    document.onclick = () => {
      popup.classList.add("hidden");
      document.onclick = () => {};
    };
  });
};

document.onmouseup = ({ clientX: x, clientY: y }) => {
  const text = document.getSelection().toString().trim();

  if (text.length === 4 && !isNaN(text)) {
    const year = parseInt(text);
    const yearInCE = year - 543;

    showPopup(yearInCE, x, y);
  }
};
