/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    html: '<html lang="zh-cmn-Hant"></html>',
    url: "https://jestjs.io/",
    userAgent: "Agent/007",
  },
};

module.exports = config;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { allCardsMass } = require("./cardsMass.ts");
it("should  check the number of cards", () => {
  const length: number = 36;
  expect(allCardsMass).toHaveLength(length);
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { randomCards } = require("./random.ts");
it("should should check the number of generated maps", () => {
  const level: number = 6;
  expect(randomCards(level, allCardsMass)).toHaveLength(level);
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { levelStr } = require("./levelChoice.ts");
// describe("activeBtnClick", () => {
//   it("adds class to the button", () => {
//     const levelChoice: number = 3;
//     levelStr(levelChoice);
//     const button = document.getElementsByClassName("button")[0];
//     expect(button.classList.contains("choice-button")).toEqual(true);
//   });
// });
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { abc } = require("./game.ts");
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { randomCards } = require("./random.ts");

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { math } = require("./tren.ts");
// it("something", () => {
//   const a = 1;
//   const b = 3;
//   const c = 4;
//   expect(abc(a, b)).toBe(c);
// });
// it("should", () => {
//   const levelChoice = 3;
//   expect(levelStr(levelChoice)).toMatch(/choice-button/);
// });
