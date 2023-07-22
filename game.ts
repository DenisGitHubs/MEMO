import { levelStr } from "./levelChoice";
import { endGame } from "./endGame";
import { CardsMass } from "./index.d";

let answer: string | null;
let checkRight: number;
let timerTablo: HTMLHeadingElement | null;
let sec: number = 0;
let min: number = 0;
let t: ReturnType<typeof setTimeout>;
let buttonTime: number;
let button;

export function goGame(cardRandomMass: CardsMass[], levelChoice: number) {
  checkRight = 0;
  answer = null;
  buttonTime = 5;
  clearTimeout(t);
  const levelEl: HTMLBodyElement | null = document.querySelector("body");
  let levelHtml = `
    <header class="header"><div class="header-time-box"><div class="header-time-name"><p class="min-sec">min</p><p class="min-sec">sec</p></div><h1 class="timer"><time class="timer">00:00</time></h1></div><button class="header-button">5</button></header>
    <div class="cards-container center"></div>`;
  if (levelEl !== null) {
    levelEl.innerHTML = levelHtml;
  }

  const levelElNext = document.getElementsByTagName("div")[2];
  levelHtml = cardRandomMass
    .map((card) => {
      return `<img src=${card.img} data=${card.img} class="card" alt="card">`;
    })
    .join("");

  levelElNext.innerHTML = levelHtml;
  const levelElNext2: HTMLBodyElement | null = document.querySelector("body");
  if (levelElNext2 !== null) {
    levelElNext2.removeAttribute("class");
  }

  const buttonInterval = setInterval(() => {
    button = document.getElementsByClassName("header-button")[0];
    button.textContent = String(buttonTime);
    buttonTime--;
    button.textContent = String(buttonTime);
    if (buttonTime === 0) {
      clearInterval(buttonInterval);
      button.textContent = "Начать заново";
    }
  }, 1000);
  setTimeout(timer, 5 * 1000);
  setTimeout(goBackButton, 5 * 1000, cardRandomMass);
  setTimeout(hideAndShow, 5 * 1000, levelChoice);

  reset();
}

function hideAndShow(levelChoice: number) {
  const cards = document.getElementsByClassName("card");

  for (const card of cards) {
    card.setAttribute("src", "./cards/mask.png");
  }
  for (const card of cards) {
    card.addEventListener("click", () => {
      const oldSrc = card.getAttribute("data");

      const checkEndGame = document.getElementsByTagName("body")[0];
      checkEndGame.getAttribute("class") === null ? gameClick() : clg();
      function clg() {
        return;
      }
      function gameClick() {
        let win;
        card.setAttribute("src", oldSrc!);
        if (answer === null) {
          answer = oldSrc;
        } else if (answer === oldSrc) {
          answer = null;
          checkRight++;
          if (checkRight === levelChoice) {
            win = true;
            window.user.win = win;
            window.user.time =
              (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
            hidenWhenEnd();
            clearTimeout(t);
            endGame(min, sec, win);
          }
        } else {
          win = false;
          window.user.time =
            (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
          window.user.win = win;
          hidenWhenEnd();
          clearTimeout(t);
          endGame(min, sec, win);
        }
      }
    });
  }
}

export function tick() {
  if (sec !== undefined) {
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
      if (min >= 60) {
        min = 0;
      }
    }
    return sec;
  }
}

function add() {
  tick();
  if (timerTablo !== null) {
    timerTablo.textContent =
      (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
  }
}
export function timer() {
  timerTablo = document.getElementsByTagName("h1")[0];
  t = setTimeout(add, 1000);
}
function reset() {
  clearTimeout(t);
  timerTablo = document.getElementsByTagName("h1")[0];
  timerTablo.textContent = "00:00";
  sec = 0;
  min = 0;
}
function goBackButton(cardRandomMass: CardsMass[]) {
  document.querySelector("button")!.addEventListener("click", () => {
    cardRandomMass.splice(0, 18);
    buttonTime = 5;
    answer = null;
    clearTimeout(t);
    levelStr();
  });
}
function hidenWhenEnd() {
  const doc = document.querySelector("header");
  if (doc !== null) {
    doc.setAttribute("class", "hiden header");
    document
      .getElementsByClassName("cards-container")[0]
      .setAttribute("class", "hiden cards-container center");
  }
}
