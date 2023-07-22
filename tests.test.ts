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
const { tick } = require("./game.ts");
it("should check adding second", () => {
  const secondSec = 1;
  expect(tick()).toBe(secondSec);
});
