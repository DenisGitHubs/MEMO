// eslint-disable-next-line @typescript-eslint/no-var-requires
const { abc } = require("./game.ts");

it("something", () => {
  const a = 1;
  const b = 3;
  const c = 4;
  expect(abc(a, b)).toBe(c);
});
