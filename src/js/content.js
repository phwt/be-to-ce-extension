import "../css/content.css";
import { showPopup } from "./module/popup";

document.onmouseup = ({ clientX: x, clientY: y }) => {
  const text = document.getSelection().toString().trim();

  if (text.length === 4 && !isNaN(text)) {
    const year = parseInt(text);
    const yearInCE = year - 543;

    showPopup(yearInCE, x, y);
  }
};
