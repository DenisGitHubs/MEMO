import { levelStr } from "./levelChoice";
export function endGame(min: number, sec: number, win: boolean) {
  const el: HTMLElement | null = document.querySelector("body");
  const html = `
    <div div class="end-container container center">
    <img src=${
      win ? "./cards/win.png" : "./cards/dead.png"
    } class="end-img" alt="win">
    <div><p class="end-text">${win ? "Вы выиграли!" : "Вы проиграли!"}</p></div>
    <div><p class="text">Затраченное время:</p></div>
    <div><p class="time-result"></p></div>
    <div class="container-start-button"><button class="start-button" id="start">Играть снова</button></div>
    </div>`;
  if (el !== null) {
    el.innerHTML = el.innerHTML + html;
    const time = document.getElementsByClassName("time-result")[0];
    time.textContent =
      (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
  }

  const buttonAgain: HTMLElement | null = document.getElementById("start");
  if (buttonAgain !== null) {
    buttonAgain.addEventListener("click", () => {
      levelStr();
    });
  }
}
