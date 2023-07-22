export const cardRandomMass: CardsMass[] = [];
import { CardsMass } from "./index.d";

export function randomCards(levelChoice: number, allCardsMass: CardsMass[]) {
  if (cardRandomMass.length < levelChoice) {
    const rand = Math.floor(Math.random() * allCardsMass.length);
    if (cardRandomMass.includes(allCardsMass[rand])) {
      randomCards(levelChoice, allCardsMass);
    } else {
      cardRandomMass.push(allCardsMass[rand]);
      randomCards(levelChoice, allCardsMass);
    }
  }
  return cardRandomMass;
}
